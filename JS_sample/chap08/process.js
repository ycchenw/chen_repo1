//mesage�ƥ󪺳B�z
self.addEventListener('message', function(e) {
  var count = 0; //�Ӽƭp�ƾ�
  //1��target�������X�ӯ�Hnum���Ϊ��ƭ�
  for (var i = 1, len = e.data.target; i < len; i++) {
    if (i % e.data.num === 0) { count++; }
  }
  //�N�p�Ƶ��G�ᵹ�D�n�����
  postMessage(count);
});

