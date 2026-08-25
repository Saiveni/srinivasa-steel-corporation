import requests

images = [
    "https://images.unsplash.com/photo-1596707335123-57757303c621",
    "https://images.unsplash.com/photo-1621905252507-b354bcadc964",
    "https://images.unsplash.com/photo-1623039405147-547794f92e9e",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
