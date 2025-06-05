# Đọc email từ data.txt (giả sử cột đầu tiên là email)
with open('server/data.txt', encoding='utf-8') as f:
    emails_data = []
    for line in f:
        parts = line.strip().split('\t')
        if parts and '@' in parts[0]:
            emails_data.append(parts[0].lower())

# Đọc email từ logIsGet.txt (mỗi dòng 1 email hoặc link, chỉ lấy dòng có @)
with open('server/temp/logIsGet.txt', encoding='utf-8') as f:
    emails_log = set(line.strip().lower() for line in f if '@' in line)

# In ra các email có trong data.txt mà không có trong logIsGet.txt, giữ nguyên thứ tự
for email in emails_data:
    if email not in emails_log:
        print(email)