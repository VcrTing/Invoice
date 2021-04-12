import platform

print(platform.system())
 
_TEST = True
if (platform.system() == 'Linux'):
  _TEST = False

TEST = _TEST

DATABASE = {
  'ENGINE': 'django.db.backends.mysql',
  'NAME': 'invoice',
  'HOST': 'crm04.svr.up5d.com',
  'PORT': 3306,
  'USER': 'root',
  'PASSWORD': 'VcrTing.ZT123zlt',
  'CONN_MAX_AGE': 9
}