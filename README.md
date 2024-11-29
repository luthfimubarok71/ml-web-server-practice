<h2>Machine Learning Web Service Practice</h2>
<p>
  Latihan mendeploy model Machine Learning ke Web Service pada Google Cloud. berikut adalah aktivitas saya dalam latihan ini.
</p>
<ol>
  <li>Membuat web service.</li>
  <li>Mengunggah project ke GitHub.</li>
  <li>Deploy web service ke Virtual Machine pada Compute Engine.</li>
</ol>
<p>
  Pada latihan kali ini, saya menggunakan package @tensorflow/tfjs-node. Tetapi saat ini package tersebut mengalami beberapa masalah ketika instalasi karena membutuhkan Python versi 2.7. 
  untuk mengatasi masalah ini saya menginstal Windows Subsystem Linux (WSL) Ubuntu yang tersedia di Microsoft Store karena Python versi 2 sudah tidak lagi dikembangkan sejak tahun 2020.<br><br>
  Windows Subsystem Linux (WSL) adalah sebuah software yang memungkinkan Anda sebagai pengguna untuk menjalankan aplikasi Linux (berbasis command-line) di lingkungan sistem operasi Windows. 
  Sederhananya, Anda seolah menggunakan terminal dengan dukungan dan bisa menggunakan berbagai sintaks dari sistem operasi Linux atau Ubuntu, tetapi dalam sistem operasi Windows.
</p>
<p>
  Untuk depndency nya, saya menggunakan bantuan framework @hapi/hapi dalam membuat web service serta @tensorflow/tfjs-node untuk load model.
</p>
