//insert de usuarios comunes
db.usuarios.insert([
    {
        "nombre":"Miguel Fernando",
        "apellido":"Tax Socop",
        "DPI": 3235493350901,
        "name_rol": "comun",
        "tipo_rol": 1,
        "password":"Miguel123"
    },
    {
        "nombre":"Samuel Antonio",
        "apellido":"Menchu Tacam",
        "DPI": 3235494450901,
        "name_rol": "comun",
        "tipo_rol": 1,
        "password":"Samuel123"
    },
    {
        "nombre":"Rodrigo Alfonso",
        "apellido":"Tiu Solis",
        "DPI": 3235497750901,
        "name_rol": "comun",
        "tipo_rol": 1,
        "password":"Rodrigo123"
    },
    {
        "nombre":"Estefani Yohana",
        "apellido":"Salcedo Batz",
        "DPI": 3235498750901,
        "name_rol": "comun",
        "tipo_rol": 1,
        "password":"Estefani123"
    },
    {
        "nombre":"Maria Dulce",
        "apellido":"Rosales Solis",
        "DPI": 3235491750901,
        "name_rol": "comun",
        "tipo_rol": 1,
        "password":"Maria123"
    }

])

//insersion de usuarios administrador y paqueteria
db.usuarios.insert([
    {
        "nombre":"Francisco German",
        "apellido":"Tax Paz",
        "DPI": 3235443350901,
        "name_rol": "paqueteria",
        "tipo_rol": 2,
        "password":"Francisco123"
    },
    {
        "nombre":"Maria Mercedez",
        "apellido":"Menchu Paxtor",
        "DPI": 3275494450901,
        "name_rol": "paqueteria",
        "tipo_rol": 2,
        "password":"Maria123"
    },

    {
        "nombre":"Ramon Gerson",
        "apellido":"Menchu Tzoc",
        "DPI": 3275494450801,
        "name_rol": "Administrador",
        "tipo_rol": 3,
        "password":"Ramon123"
    }
])

