def CameraHack(ip):
    if ip == "192.168.0.1":
        blocks.place(AIR, world(-7, -15, 2))
    elif ip == "192.168.10.19":
        blocks.place(AIR, world(-10, -15, 2))