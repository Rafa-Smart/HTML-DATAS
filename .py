import os
os.system("cls")
print("="*40)
print("PROGRAM MENGHITUNG JUMLAH FILE DI FOLDER")
print("="*40)
def hitung_file(folder_path):
    jumlah_file = 0
    # melooping melalui semua item dalam folder
    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        # Cek dulu apakah item adalah file
        if os.path.isfile(item_path):
            jumlah_file += 1
        else:
            # Jika item bukan file, maka cek apakah item adalah folder
            if os.path.isdir(item_path):
                jumlah_file += hitung_file(item_path)
    return jumlah_file


folder_path = input("masukan nama folder = ")
jumlah = hitung_file(folder_path)
print(f'Jumlah file dalam folder {folder_path} adalah: {jumlah}')

