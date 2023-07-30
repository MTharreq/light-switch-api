const status = 'https://sgp1.blynk.cloud/external/api/isHardwareConnected?token=9aw_6nlYU8TMoqkrK_XlI-m4FBKMznTE'
const value = 'https://sgp1.blynk.cloud/external/api/get?token=9aw_6nlYU8TMoqkrK_XlI-m4FBKMznTE&V0'

const valueON = 71   //MIN 65, Batas aman 70
const valueOFF = 105 //MAX 115, Batas aman 105
const switchON = 'https://sgp1.blynk.cloud/external/api/update?token=9aw_6nlYU8TMoqkrK_XlI-m4FBKMznTE&v0='+valueON
const switchOFF = 'https://sgp1.blynk.cloud/external/api/update?token=9aw_6nlYU8TMoqkrK_XlI-m4FBKMznTE&v0='+valueOFF