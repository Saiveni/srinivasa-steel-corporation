import requests

images = [
    "https://images.unsplash.com/photo-1616422285623-13ff0167f9a8", # ARW8QOYR_bI seems to be an old ID format, using a common rebar ID
    "https://images.unsplash.com/photo-1590579491624-f98f36d4c763", # IvHoDv9v7ao alternative
    "https://images.unsplash.com/photo-1619550990393-ed4833c82914", # Rolls of steel
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"  # Decoiling machine
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
