import requests

# Definir la URL de la API a la que deseas enviar los datos
url_api = 'http://localhost:3000/saveLocation'

# Ruta del archivo de texto que quieres leer y enviar
ruta_archivo = './coordenadas.txt'
 
# Leer archivo de texto y enviar datos
def procesarDatos():
    with open(ruta_archivo, 'r') as file:
        lines = file.readlines()

    for line in lines:
        # Dividir la línea en las coordenadas x e y
        parts = line.strip('()\n').split(', ')
        x, y = parts[0], parts[1]

        # Crear el diccionario JSON
        data = {
            "x": x,
            "y": y
        }

        # Enviar los datos a la API
        requests.post(url_api, json=data)

def main():
    procesarDatos()

if __name__ == '__main__':
    main()

