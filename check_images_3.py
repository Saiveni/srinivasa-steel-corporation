import requests

images = [
    "https://images.unsplash.com/photo-1589939705384-5185137a7f0f",
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
    "https://images.unsplash.com/photo-1506452819137-0422416856b8",
    "https://images.unsplash.com/photo-1567502738927-4d19d6585697"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
