# Table of Contents
- [How-to-reproduce](#how-to-reproduce)
- [How it works](#how-it-works)
  - [Convertions](#convertions)
    - [Convert negative number to position one](#n_s_u)
  
<a name="how-to-reproduce"></a>
# How to reproduce?
1. Clone or download repo
2. ``` console npm run test:convert ```

<a name="how-it-works"></a>
# How it works?

<a name="convertions"></a>
## Convertions

<a name="n_s_u"></a>
## Convert negative number to position one

```
function n32s_convert_u (value) {
	return (1 | (value >> 31)) * value;
 }
 
 const value = -50; // 11111111 11111111 11111111 11111111 11111111 11111111 11111111 11001110 = -50;
 function n32s_convert_u (value) {
	const shift = value >> 31; // result 11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111111 = -1;
	//we must perform "1 | shift" because our result must be either -1 or 1; "value >> 31" will give us either only -1 or 0;
	const bitwise_or = 1 | shift; // result 11111111 11111111 11111111 11111111 11111111 11111111 11111111 11111111 = -1;
	const bitwise_or * value; //  -1 * -50 = 50;
 }
 
 const value = 50; // 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00110010 = 50;
 function n32s_convert_u (value) {
	const shift = value >> 31; // result 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 = 0;
	const bitwise_or = 1 | shift; // result 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000001 = 1;
	const bitwise_or * value; // 1 * 50 = 50;
 }
```
