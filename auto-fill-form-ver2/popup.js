
let currentData = {};
function showAlert(msg) {
    const alertDiv = document.getElementById('myAlert');
    alertDiv.textContent = msg;
    alertDiv.style.display = 'block';

    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 2000);  // 100ms tự động ẩn
}
function updateInfo() {
    const { cccd, tinh, gioi_tinh, birth, tinh_zip, address, town, family, middle, given, sdt, email, password, linkChange } = currentData;
    const resetProxy = document.getElementById("resetProxy")
    resetProxy.addEventListener("click", async function () {
        const mt = await fetch(linkChange)
        const data = await mt.json()
        if (data.error) {
            showAlert(data.error);
            return
        }
        showAlert(data.message);
    })
    document.getElementById("info").innerText = `
📧 Email: ${email}
🔒 Mật khẩu: ${password}
`;
}

// Gửi script inject vào tab hiện tại
function runStep(step) {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (step, data) => {
                // inject vào trang web
                if (step == 100) {
                    window.location.assign(`https://www.paypal.com`)
                }


                if (step == 1000) {
                    const balanceElement = document.querySelector('[data-test-id="available-balance"]');
                    if (balanceElement) {
                        const rawText = balanceElement.textContent.trim(); // "$0.00"
                        const numericValue = rawText.replace(/[^0-9.]/g, ''); // 0.00
                        // alert("Xác nhận chuyển tiền: " + numericValue)
                        chrome.storage.local.set({ fillRecipient: data.emailNhan, numericValue: numericValue }, () => {
                            window.location.assign("https://www.paypal.com/myaccount/transfer/homepage/pay");
                        });
                    }

                }


            },
            args: [step, currentData]
        });
    });
}

// Khi popup mở
document.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("setProxy").addEventListener("click", () => {
        const proxyUrl = document.getElementById("proxyUrl").value;

        chrome.runtime.sendMessage({
            type: "set-proxy",
            proxyUrl: proxyUrl
        });
    });

    document.getElementById("disableProxy").addEventListener("click", () => {
        chrome.runtime.sendMessage({ type: "disable-proxy" });
    });
    function sendMessageAsync(message) {
        return new Promise((resolve, reject) => {
            chrome.runtime.sendMessage(message, (response) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(response);
                }
            });
        });
    }

    document.getElementById("nextProxy").addEventListener("click", async () => {
        try {
            await sendMessageAsync({ type: "disable-proxy" });

            const response = await fetch("http://localhost:3000/getProxy");
            const data = await response.json();
            const { currentProxy, nextProxy } = data;

            const changeResponse = await fetch(currentProxy.linkChange);
            const changeData = await changeResponse.json();

            if (changeData.error) {
                await sendMessageAsync({
                    type: "set-proxy",
                    proxyUrl: currentProxy.proxy
                });
                showAlert(changeData.error);
                return;
            }

            await sendMessageAsync({
                type: "set-proxy",
                proxyUrl: nextProxy.proxy
            });

            showAlert(changeData.message);

        } catch (error) {
            showAlert("Đã xảy ra lỗi: " + error.message);
        }
    });

    const btn2 = document.getElementById("goHome");
    btn2.onclick = () => runStep(100);

    const btn3 = document.getElementById("sentMoney");
    btn3.onclick = () => runStep(1000);

    const btn4 = document.getElementById("saveMail");
    btn4.onclick = async () => {
        const mt = await fetch("http://localhost:3000/saveMail");
        const data = await mt.json();
        if (data.error) {
            showAlert(data.error);
            return;
        } else {
            showAlert(data.success);
        }
    }


    fetch("https://api.ipify.org?format=json") // Gửi yêu cầu GET đến IP API
        .then(response => response.json())     // Chuyển đổi kết quả thành JSON
        .then(data => {
            const myip = document.getElementById("myip"); // Lấy thẻ input có id "myip"
            myip.textContent = data.ip;                         // Gán giá trị IP vào input
        })
        .catch(error => {
            const myip = document.getElementById("myip");
            myip.textContent = "Lỗi Lấy Ip";                    // Ghi thông báo lỗi nếu fetch thất bại
        });

    // Khởi tạo dữ liệu lần đầu
    const mt = await fetch("http://localhost:3000/get")
    const data = await mt.json()
    currentData = data;
    updateInfo();
    console.log(currentData)
    const proxyUrl = document.getElementById("proxyUrl");
    if (proxyUrl) {
        proxyUrl.value = currentData.proxy
    }
    {
        const mt = await fetch("http://localhost:3000/getLink_NonEx")
        const data = await mt.json()
        if (data && !data.error) {
            const { firstLink, secondLink } = data;
            document.getElementById("email1Label").textContent = firstLink.email + " " + firstLink.amount;
            document.getElementById("email2Label").textContent = secondLink.email + " " + secondLink.amount;
            const requestGetErrorEmail1 = await fetch(`http://localhost:3000/getError/${firstLink.email}`)
            const dataErrorEmail1 = await requestGetErrorEmail1.json()
            if (!dataErrorEmail1.error) {
                document.getElementById("email1").textContent = dataErrorEmail1.error;
            }
            const requestGetErrorEmail2 = await fetch(`http://localhost:3000/getError/${secondLink.email}`)
            const dataErrorEmail2 = await requestGetErrorEmail2.json()
            if (!dataErrorEmail2.error) {
                document.getElementById("email2").textContent = dataErrorEmail2.error;
            }
            const buttonSendErrorEmail1 = document.getElementById("buttonSendErrorEmail1")
            buttonSendErrorEmail1.onclick = async () => {
                const requestSendErrorEmail1 = await fetch(`http://localhost:3000/setError/${firstLink.email}/${document.getElementById("email1").value}`)
                const dataSendErrorEmail1 = await requestSendErrorEmail1.json()
                if (!dataSendErrorEmail1.error) {
                    showAlert(dataSendErrorEmail1.success);
                } else {
                    showAlert(dataSendErrorEmail1.error);
                }
            }
            const buttonSendErrorEmail2 = document.getElementById("buttonSendErrorEmail2")
            buttonSendErrorEmail2.onclick = async () => {
                const requestSendErrorEmail2 = await fetch(`http://localhost:3000/setError/${secondLink.email}/${document.getElementById("email2").value}`)
                const dataSendErrorEmail2 = await requestSendErrorEmail2.json()
                if (!dataSendErrorEmail2.error) {
                    showAlert(dataSendErrorEmail2.success);
                } else {
                    showAlert(dataSendErrorEmail2.error);
                }
            }
        } else {
            document.getElementById("email1Label").textContent = "Chưa có link"
            document.getElementById("email2Label").textContent = "Chưa có link"
        }
    }   
    const buttonUndoLink = document.getElementById("undoLink")
    buttonUndoLink.onclick = async () => {
        const requestUndoLink = await fetch("http://localhost:3000/undoLink")
        const dataUndoLink = await requestUndoLink.json()
        if (!dataUndoLink.error) {
            showAlert(dataUndoLink.success);
        } else {
            showAlert(dataUndoLink.error);
        }
    }


    document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') {
            e.preventDefault();
            document.getElementById('nextProxy').click();
        }
        if (e.key.toLowerCase() === 'c') {
            document.getElementById('sentMoney').click();
        }
        if (e.key.toLowerCase() === 'z') {
            document.getElementById('saveMail').click();
        }
        if (e.key.toLowerCase() === 'x') {
            document.getElementById('goPageReg').click();
        }
    });

});