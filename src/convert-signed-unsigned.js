function c_s_u (value) {
	return (1 | (value >> 31)) * value;
}

export {c_s_u};