function layGiaoTriTuBatDauNam(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].Name === 'BatDauNam') {
      return (parseInt(data[i].Value) + 1) + '';
    }
  }
  return '';
}

export default function processData(processName, data) {
  switch (processName) {
    case 'LayGiaoTriTuBatDauNam' :
      return layGiaoTriTuBatDauNam(data);
  }
  return '';
}