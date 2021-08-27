import platform

print(platform.system())
 
_TEST = True
if (platform.system() == 'Linux'):
  _TEST = False

TEST = _TEST

DATABASE = {
  'ENGINE': 'django.db.backends.mysql',
  'NAME': 'invoice',
  'HOST': '139.180.220.44',
  'PORT': 3306,
  'USER': 'root',
  'PASSWORD': 'VcrTing.ZT123zlt',
  'CONN_MAX_AGE': 9
}