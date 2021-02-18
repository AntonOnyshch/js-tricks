//Convert 32bit number with negative sign to positive 
function n32s_convert_u (value) {
	return (1 | (value >> 31)) * value;
}

export {n32s_convert_u};