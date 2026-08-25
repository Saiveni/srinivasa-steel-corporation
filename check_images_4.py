import requests

images = [
    "https://images.unsplash.com/photo-1516216628859-9bccecab13ca",
    "https://images.unsplash.com/photo-1530260626688-048279320445",
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
