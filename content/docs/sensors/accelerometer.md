---

title: "Акселерометр Х"

navigation.icon: "/images/docs/sensors/accelerometr1.jpeg"

---



# ОПИСАНИЕ

Акселерометр Х - прибор, измеряющий проекцию кажущегося ускорения (разности между истинным ускорением объекта и гравитационным ускорением). Датчик Lego- и Arduino-совместим.

## Техническое описание:

- Размер (д*ш*в): 40x24x24 

- Корпус, совместимый с Lego-деталями

- Сенсор считывает вектор ускорения, кодирует его и передает контроллеру по шине I2C.

- Рабочее напряжение: 3.3В

- Разъем для подключения к другому устройству: F-dupont 4pin

### Функционал при подключении к контроллеру RED X:

Измерение вектора ускорения.

#### Схема подключения (Акселерометр X)

![](/images/docs/sensors/accelerometr1.jpeg)

##### Пример кода RED Code (Акселерометр X)

![](/images/docs/sensors/accelerometr2.jpeg)

*Физически у вас должно получиться, что если наклонить акселерометр по оси Х на 180 градусов, то сервомотор, подключенный в порт D1, поворачивается на нулевой градус; если наклонить акселерометр по оси Х на 0 градусов, то сервомотор, подключенный в порт D1, поворачивается на 180 градусов