import requests

images = [
    "https://images.unsplash.com/photo-1620055375841-e70597305d2e",
    "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5",
    "https://images.unsplash.com/photo-1619210214349-8c98c3630f94",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
