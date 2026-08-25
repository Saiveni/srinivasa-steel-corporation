import requests

images = [
    "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/259985/pexels-photo-259985.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1094711/pexels-photo-1094711.jpeg?auto=compress&cs=tinysrgb&w=400"
]

for url in images:
    try:
        r = requests.head(url, timeout=5)
        print(f"{url}: {r.status_code}")
    except Exception as e:
        print(f"{url}: Error {e}")
