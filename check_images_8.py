import requests

images = [
    "https://images.unsplash.com/photo-1590579491624-f98f36d4c763",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837",
    "https://images.unsplash.com/photo-1504307651254-35682fd9367d",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
