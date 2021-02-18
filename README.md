# Table of Contents
- [How-to-reproduce](#how-to-reproduce)
- [How it works](#how-it-works)
  - [Convertions](#convertions)
    - [Convert negative number to position one](#n_s_u)
  
<a name="how-to-reproduce"></a>
# How to reproduce?
1. Clone or download repo
2. npm run test:convert

<a name="how-it-works"></a>
# How it works?

<a name="convertions"></a>
## Convertions

<a name="n_s_u"></a>
## Convert negative number to position one

` function n32s_convert_u (value) {
	return (1 | (value >> 31)) * value;
 }
`
