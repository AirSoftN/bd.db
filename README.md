# bd.db افضل بكج قاعدة البيانات

<div style="text-align: center;">
    <a href="https://discord.gg/d-dev"><img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6918e57475a843f59f_icon_clyde_black_RGB.svg" alt="Discord" style="width: 100px; height: 100px;"></a>
    <a href="https://www.npmjs.com/package/bd-db"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1080px-Npm-logo.svg.png" alt="NPM" style="width: 100px; height: 100px;"></a>
    <a href="https://github.com/KhattabKHA5/bd.db"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub" style="width: 100px; height: 100px;"></a>
</div>

<div style="text-align: center;">
  <img src="https://img.shields.io/npm/v/bd-db" alt="Version">
  <img src="https://img.shields.io/npm/dt/bd-db" alt="Downloads">
</div>

<h1 style="text-align: center; font-size: 36px; color: #4CAF50;">bkdb Package</h1>

<p style="text-align: center;">.</p>

<p style="text-align: center;"><a href="https://www.npmjs.com/package/bd-db"><strong>NPM</strong></a></p>

<h2 style="text-align: center; font-size: 24px; color: #4CAF50;">installation</h2>

<p style="text-align: center;">use npm or yarn to install <code>bd-db</code> package :</p>

<pre style="text-align: center;"><code>npm install bd-db</code></pre>
<pre style="text-align: center;"><code>yarn add bd-db</code></pre>

<h2 style="text-align: center; font-size: 24px; color: #4CAF50;">instillation</h2>

<h3 style="text-align: center; font-size: 20px;">JavaScript example</h3>

<pre style="text-align: center;"><code>const { bddb } = require('bd-db');</code></pre>
<pre style="text-align: center;"><code>const db = new bddb('database.json'); // Specify a file to be the database</code></pre>

<h3 style="text-align: center; font-size: 20px;">TypeScript example</h3>

<pre style="text-align: center;"><code>import { bddb } from 'bd-db'</code></pre>
<pre style="text-align: center;"><code>const db = new bddb('database.json'); // Specify a file to be the database</code></pre>

<h2 style="text-align: center; font-size: 24px; color: #4CAF50;">Usage</h2>

<p style="text-align: center;"><strong>Considering that you used the previous code to initialize the database :</strong></p>

<h3 style="text-align: center; font-size: 20px;">How to use <code>set('key', 'value')</code>:</h3>

<pre style="text-align: center;"><code>db.set('key', 'value'); // Add a value to the database with a specific key</code></pre>

<p style="text-align: center;"><strong>Example for <code>set('key', 'value')</code>:</strong></p>

<pre style="text-align: center;"><code>db.set('d', 'foro')</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>push('key', 'value')</code>:</h3>

<pre style="text-align: center;"><code>db.push('key', 'value'); // Add a value in an array to the database with a specified key</code></pre>

<p style="text-align: center;"><strong>Example for <code>push('key', 'value')</code>:</strong></p>

<pre style="text-align: center;"><code>db.push('a, 'danaa');</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>add('key', number)</code>:</h3>

<pre style="text-align: center;"><code>db.add('key', number); // Add a number to the sum of the value of the specified key</code></pre>

<p style="text-align: center;"><strong>Example for <code>add('key', number)</code>:</strong></p>

<pre style="text-align: center;"><code>db.add('pointa', 10);
db.add('pointa', 29);</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>subtract('key', number)</code>:</h3>

<pre style="text-align: center;"><code>db.subtract('key', number); // Subtract a number to the sum of the value of the specified key</code></pre>

<p style="text-align: center;"><strong>Example for <code>subtract('key', number)</code>:</strong></p>

<pre style="text-align: center;"><code>db.subtract('pointa', 26);
db.subtract('pointa', 5);</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>get('key')</code>:</h3>

<pre style="text-align: center;"><code>db.get('key'); // Get a value from the database with a specific key</code></pre>

<p style="text-align: center;"><strong>Example for <code>get('key')</code>:</strong></p>

<pre style="text-align: center;"><code>db.set('d', 'foto');
db.push('B', 'boto');
db.push('s', 'soso');
console.log(db.get('A'));//Output &lt; foto &gt;
console.log(db.get('B'));//Output &lt; ["boto", "soso"] &gt;
db.add('pointa', 19);
db.add('pointa', 2);
console.log(db.get('na3san_points')); &lt;  &gt;
db.subtract('pointa', 10);
db.subtract('pointa', 5);
console.log(db.get('pointa'));// Output &lt; 0 &gt;</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>delete('key')</code>:</h3>

<pre style="text-align: center;"><code>db.delete('key'); // Remove a value from the database with a specific key</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>getAll()</code>:</h3>

<pre style="text-align: center;"><code>db.getAll(); //G et all the data stored in the database</code></pre>

<h3 style="text-align: center; font-size: 20px;">How to use <code>clearAll()</code>:</h3>

<pre style="text-align: center;"><code>db.clearAll(); // Clear all the data stored in the database</code></pre>

<p style="text-align: center;"><strong>All copyrights for bdDev</strong></p>

# Installation

استخدم npm أو الغزل للتثبيت `bd-db` package :

```
npm install bd-db
```
```
yarn add bd-db
```

# التثبيتات

## Javascript مثال

```js
const { bdbd } = require('bd-db');
const db = new bdbd('database.json');//Specify a file to be the database
```

## Typescript مثال

```ts
import { bdbd } from 'bd-db'
const db = new bdbd('database.json'); // حدد ملفًا ليكون قاعدة البيانات
```

# كيفية الاستخدام

**مع الأخذ في الاعتبار أنك استخدمت الكود السابق لتهيئة قاعدة البيانات :**

كيف تستخدم `set('key', 'value')` :

```js
db.set('key', 'value'); // إضافة قيمة إلى قاعدة البيانات باستخدام مفتاح محدد
```

Example for `set('key', 'value')` :

```js
db.set('d', 'a')
```

كيف تستخدم `push('key', 'value')` :

```js
db.push('key', 'value'); // قيمة في صفيف إلى قاعدة البيانات باستخدام مفتاح محدد
```

مثال `push('key', 'value')` :

```js
db.push('B', 'Banana');
```

كيف تستخدم `add('key', number)` :

```js
db.add('key', number); // إضافة رقم إلى مجموع قيمة المفتاح المحدد
```

Example for `add('key', number)` :

```js
db.add('pointa', 10);
db.add('pointa', 6);
```

كيف تستخدم `subtract('key', number)` :

```js
db.subtract('key', number); // اطرح رقمًا لمجموع قيمة المفتاح المحدد
```

مثال `subtract('key', number)` :

```js
db.subtract('pointa', 15);
db.subtract('na3san_points', 18);
```

كيف تستخدم `get('key')` :

```js
db.get('key'); // احصل على قيمة من قاعدة البيانات باستخدام مفتاح محدد
```

مثال `get('key')` :

```js
db.set('d', 'toto');
db.push('b', 'fofo');
db.push('a', 'popo');
console.log(db.get('A'));//Output < toto >
console.log(db.get('B'));//Output < ["fofo", "bobo"] >
db.add('pointa', 10);
db.add('pointa', 5);
console.log(db.get('pointa'));
db.subtract('pointa', 14);
db.subtract('pointa', 8);
console.log(db.get('pointa'));
```

كيف تستخدم `delete('key')` :

```js
db.delete('key'); // إزالة قيمة من قاعدة البيانات باستخدام مفتاح محدد
```

كيفية استخدام `getAll()` :

```js
db.getAll(); // الحصول على كافة البيانات المخزنة في قاعدة البيانات
```

How to use `clearAll()` :

```js
db.clearAll(); // مسح كافة البيانات المخزنة في قاعدة البيانات
```


# Installation

استخدم npm أو الغزل لتثبيت الحزمة `bd-db` :

```
npm install bd-db
```
```
yarn add bd-db
```

# التثبيتات

## Javascript مثال

```js
const { bddb } = require('bd-db');
const db = new bddb('database.json'); // حدد ملف عشان تحفظ فيه البيانات
```

##  مثال  TypeScript

```ts
import { bddb } from 'bd-db'
const db = new bddb('database.json'); // حدد ملفًا ليكون قاعدة البيانات
```

# كيفية الاستخدام

**مع الأخذ في الاعتبار أنك استخدمت الكود السابق لتهيئة قاعدة البيانات :**

كيف تستخدمها `set('key', 'value')` :

```js
db.set('key', 'value'); // إضافة قيمة إلى قاعدة البيانات باستخدام مفتاح محدد
```

مثال `set('key', 'value')` :

```js
db.set('b', 'blbul')
```

كيف تستخدمها `push('key', 'value')` :

```js
db.push('key', 'value'); // إضافة قيمة في صفيف إلى قاعدة البيانات باستخدام مفتاح محدد
```

مثال ل `push('key', 'value')` :

```js
db.push('d', 'tofah');
```

كيفية استخدام `add('key', number)` :

```js
db.add('key', number); // إضافة رقم إلى مجموع قيمة المفتاح المحدد
```

مثال `add('key', number)` :

```js
db.add('pointa', 10);
db.add('pointa', 5);
```

كيف تستعملها يا حلو `subtract('key', number)` :

```js
db.subtract('key', number); // اطرح رقمًا لمجموع قيمة المفتاح المحدد
```

مثال ل `subtract('key', number)` :

```js
db.subtract('pointa', 56);
db.subtract('pointa', 14);
```

How to use `get('key')` :

```js
db.get('key'); // احصل على قيمة من قاعدة البيانات باستخدام مفتاح محدد
```

مثال ل  `get('key')` :

```js
db.set('d', 'boza');
db.push('g', 'tofah');
db.push('b', 'blbul');
console.log(db.get('d'));//النتيجة < poza >
console.log(db.get('g'));//النتيجة < ["tofah", "blbul"] >
db.add('pointa', 100);
db.add('pointa', 20);
console.log(db.get('pointa'));
db.subtract('pointa', 15);
db.subtract('pointa', 37);
console.log(db.get('pointa'));
```

How to use `delete('key')` :

```js
db.delete('key'); // إزالة قيمة من قاعدة البيانات باستخدام مفتاح محدد
```

How to use `getAll()` :

```js
db.getAll(); // الحصول على كافة البيانات المخزنة في قاعدة البيانات
```

How to use `clearAll()` :

```js
db.clearAll(); // مسح كافة البيانات المخزنة في قاعدة البيانات
```

### جميع حقوقك محفوظة لدى bdDev
