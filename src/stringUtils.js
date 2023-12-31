const fixDict = [
	// format: [find, replace, argument*]
	// * optional. default argument is "gm"

	// decimal HTML characters
	["&#32;", " "],
	["&#33;", "!"],
	["&#34;", '"'],
	["&#35;", "#"],
	["&#36;", "$"],
	["&#37;", "%"],
	["&#38;", "&"],
	["&#39;", "'"],
	["&#40;", "("],
	["&#41;", ")"],
	["&#42;", "*"],
	["&#43;", "+"],
	["&#44;", ","],
	["&#45;", "-"],
	["&#46;", ","],
	["&#47;", "/"],
	["&#48;", "0"],
	["&#49;", "1"],
	["&#50;", "2"],
	["&#51;", "3"],
	["&#52;", "4"],
	["&#53;", "5"],
	["&#54;", "6"],
	["&#55;", "7"],
	["&#56;", "8"],
	["&#57;", "9"],
	["&#58;", ":"],
	["&#59;", ";"],
	["&#60;", "<"],
	["&#61;", "="],
	["&#62;", ">"],
	["&#63;", "?"],
	["&#64;", "@"],
	["&#65;", "A"],
	["&#66;", "B"],
	["&#67;", "C"],
	["&#68;", "D"],
	["&#69;", "E"],
	["&#70;", "F"],
	["&#71;", "G"],
	["&#72;", "H"],
	["&#73;", "I"],
	["&#74;", "J"],
	["&#75;", "K"],
	["&#76;", "L"],
	["&#77;", "M"],
	["&#78;", "N"],
	["&#79;", "O"],
	["&#80;", "P"],
	["&#81;", "Q"],
	["&#82;", "R"],
	["&#83;", "S"],
	["&#84;", "T"],
	["&#85;", "U"],
	["&#86;", "V"],
	["&#87;", "W"],
	["&#88;", "X"],
	["&#89;", "Y"],
	["&#90;", "Z"],
	["&#91;", "["],
	["&#92;", "\\"],
	["&#93;", "]"],
	["&#94;", "^"],
	["&#95;", "_"],
	["&#96;", "`"],
	["&#97;", "a"],
	["&#98;", "b"],
	["&#99;", "c"],
	["&#100;", "d"],
	["&#101;", "e"],
	["&#102;", "f"],
	["&#103;", "g"],
	["&#104;", "h"],
	["&#105;", "i"],
	["&#106;", "j"],
	["&#107;", "k"],
	["&#108;", "l"],
	["&#109;", "m"],
	["&#110;", "n"],
	["&#111;", "o"],
	["&#112;", "p"],
	["&#113;", "q"],
	["&#114;", "r"],
	["&#115;", "s"],
	["&#116;", "t"],
	["&#117;", "u"],
	["&#118;", "v"],
	["&#119;", "w"],
	["&#120;", "x"],
	["&#121;", "y"],
	["&#122;", "z"],
	["&#123;", "{"],
	["&#124;", "|"],
	["&#125;", "}"],
	["&#126;", "~"],

	["&#160;", " "],
	["&#161;", "¡"],
	["&#162;", "¢"],
	["&#163;", "£"],
	["&#164;", "¤"],
	["&#165;", "¥"],
	["&#166;", "¦"],
	["&#167;", "§"],
	["&#168;", "¨"],
	["&#169;", "©"],
	["&#170;", "ª"],
	["&#171;", "«"],
	["&#172;", "¬"],
	["&#173;", "­"],
	["&#174;", "®"],
	["&#175;", "¯"],
	["&#176;", "°"],
	["&#177;", "±"],
	["&#178;", "²"],
	["&#179;", "³"],
	["&#180;", "´"],
	["&#181;", "µ"],
	["&#182;", "¶"],
	["&#183;", "·"],
	["&#184;", "¸"],
	["&#185;", "¹"],
	["&#186;", "º"],
	["&#187;", "»"],
	["&#188;", "¼"],
	["&#189;", "½"],
	["&#190;", "¾"],
	["&#191;", "¿"],
	["&#192;", "À"],
	["&#193;", "Á"],
	["&#194;", "Â"],
	["&#195;", "Ã"],
	["&#196;", "Ä"],
	["&#197;", "Å"],
	["&#198;", "Æ"],
	["&#199;", "Ç"],
	["&#200;", "È"],
	["&#201;", "É"],
	["&#202;", "Ê"],
	["&#203;", "Ë"],
	["&#204;", "Ì"],
	["&#205;", "Í"],
	["&#206;", "Î"],
	["&#207;", "Ï"],
	["&#208;", "Ð"],
	["&#209;", "Ñ"],
	["&#210;", "Ò"],
	["&#211;", "Ó"],
	["&#212;", "Ô"],
	["&#213;", "Õ"],
	["&#214;", "Ö"],
	["&#215;", "×"],
	["&#216;", "Ø"],
	["&#217;", "Ù"],
	["&#218;", "Ú"],
	["&#219;", "Û"],
	["&#220;", "Ü"],
	["&#221;", "Ý"],
	["&#222;", "Þ"],
	["&#223;", "ß"],
	["&#224;", "à"],
	["&#225;", "á"],
	["&#226;", "â"],
	["&#227;", "ã"],
	["&#228;", "ä"],
	["&#229;", "å"],
	["&#230;", "æ"],
	["&#231;", "ç"],
	["&#232;", "è"],
	["&#233;", "é"],
	["&#234;", "ê"],
	["&#235;", "ë"],
	["&#236;", "ì"],
	["&#237;", "í"],
	["&#238;", "î"],
	["&#239;", "ï"],
	["&#240;", "ð"],
	["&#241;", "ñ"],
	["&#242;", "ò"],
	["&#243;", "ó"],
	["&#244;", "ô"],
	["&#245;", "õ"],
	["&#246;", "ö"],
	["&#247;", "÷"],
	["&#248;", "ø"],
	["&#249;", "ù"],
	["&#250;", "ú"],
	["&#251;", "û"],
	["&#252;", "ü"],
	["&#253;", "ý"],
	["&#254;", "þ"],
	["&#255;", "ÿ"],

	["&#286;", "Ğ"],
	["&#287;", "ğ"],

	["&#304;", "İ"],
	["&#305;", "ı"],

	["&#338;", "Œ"],
	["&#339;", "œ"],

	["&#350;", "Ş"],
	["&#351;", "ş"],
	["&#352;", "Š"],
	["&#353;", "š"],

	["&#376;", "Ÿ"],

	["&#402;", "ƒ"],

	["&#8211;", "–"],
	["&#8212;", "—"],

	["&#8216;", "‘"],
	["&#8217;", "’"],
	["&#8218;", "‚"],

	["&#8220;", "“"],
	["&#8221;", "”"],
	["&#8222;", "„"],

	["&#8224;", "†"],
	["&#8225;", "‡"],
	["&#8226;", "•"],

	["&#8230;", "…"],

	["&#8240;", "‰"],

	["&#8364;", "€"],

	["&#8482;", "™"],

	// hex HTML characters
	["&#x20;", " ", "gmi"],
	["&#x21;", "!", "gmi"],
	["&#x22;", '"', "gmi"],
	["&#x23;", "#", "gmi"],
	["&#x24;", "$", "gmi"],
	["&#x25;", "%", "gmi"],
	["&#x26;", "&", "gmi"],
	["&#x27;", "'", "gmi"],
	["&#x28;", "(", "gmi"],
	["&#x29;", ")", "gmi"],
	["&#x2a;", "*", "gmi"],
	["&#x2b;", "+", "gmi"],
	["&#x2c;", ",", "gmi"],
	["&#x2d;", "-", "gmi"],
	["&#x2e;", ",", "gmi"],
	["&#x2f;", "/", "gmi"],
	["&#x30;", "0", "gmi"],
	["&#x31;", "1", "gmi"],
	["&#x32;", "2", "gmi"],
	["&#x33;", "3", "gmi"],
	["&#x34;", "4", "gmi"],
	["&#x35;", "5", "gmi"],
	["&#x36;", "6", "gmi"],
	["&#x37;", "7", "gmi"],
	["&#x38;", "8", "gmi"],
	["&#x39;", "9", "gmi"],
	["&#x3a;", ":", "gmi"],
	["&#x3b;", ";", "gmi"],
	["&#x3c;", "<", "gmi"],
	["&#x3d;", "=", "gmi"],
	["&#x3e;", ">", "gmi"],
	["&#x3f;", "?", "gmi"],
	["&#x40;", "@", "gmi"],
	["&#x41;", "A", "gmi"],
	["&#x42;", "B", "gmi"],
	["&#x43;", "C", "gmi"],
	["&#x44;", "D", "gmi"],
	["&#x45;", "E", "gmi"],
	["&#x46;", "F", "gmi"],
	["&#x47;", "G", "gmi"],
	["&#x48;", "H", "gmi"],
	["&#x49;", "I", "gmi"],
	["&#x4a;", "J", "gmi"],
	["&#x4b;", "K", "gmi"],
	["&#x4c;", "L", "gmi"],
	["&#x4d;", "M", "gmi"],
	["&#x4e;", "N", "gmi"],
	["&#x4f;", "O", "gmi"],
	["&#x50;", "P", "gmi"],
	["&#x51;", "Q", "gmi"],
	["&#x52;", "R", "gmi"],
	["&#x53;", "S", "gmi"],
	["&#x54;", "T", "gmi"],
	["&#x55;", "U", "gmi"],
	["&#x56;", "V", "gmi"],
	["&#x57;", "W", "gmi"],
	["&#x58;", "X", "gmi"],
	["&#x59;", "Y", "gmi"],
	["&#x5a;", "Z", "gmi"],
	["&#x5b;", "[", "gmi"],
	["&#x5c;", "\\", "gmi"],
	["&#x5d;", "]", "gmi"],
	["&#x5e;", "^", "gmi"],
	["&#x5f;", "_", "gmi"],
	["&#x60;", "`", "gmi"],
	["&#x61;", "a", "gmi"],
	["&#x62;", "b", "gmi"],
	["&#x63;", "c", "gmi"],
	["&#x64;", "d", "gmi"],
	["&#x65;", "e", "gmi"],
	["&#x66;", "f", "gmi"],
	["&#x67;", "g", "gmi"],
	["&#x68;", "h", "gmi"],
	["&#x69;", "i", "gmi"],
	["&#x6a;", "j", "gmi"],
	["&#x6b;", "k", "gmi"],
	["&#x6c;", "l", "gmi"],
	["&#x6d;", "m", "gmi"],
	["&#x6e;", "n", "gmi"],
	["&#x6f;", "o", "gmi"],
	["&#x70;", "p", "gmi"],
	["&#x71;", "q", "gmi"],
	["&#x72;", "r", "gmi"],
	["&#x73;", "s", "gmi"],
	["&#x74;", "t", "gmi"],
	["&#x75;", "u", "gmi"],
	["&#x76;", "v", "gmi"],
	["&#x77;", "w", "gmi"],
	["&#x78;", "x", "gmi"],
	["&#x79;", "y", "gmi"],
	["&#x7a;", "z", "gmi"],
	["&#x7b;", "{", "gmi"],
	["&#x7c;", "|", "gmi"],
	["&#x7d;", "}", "gmi"],
	["&#x7e;", "~", "gmi"],

	["&#xa0;", " ", "gmi"],
	["&#xa1;", "¡", "gmi"],
	["&#xa2;", "¢", "gmi"],
	["&#xa3;", "£", "gmi"],
	["&#xa4;", "¤", "gmi"],
	["&#xa5;", "¥", "gmi"],
	["&#xa6;", "¦", "gmi"],
	["&#xa7;", "§", "gmi"],
	["&#xa8;", "¨", "gmi"],
	["&#xa9;", "©", "gmi"],
	["&#xaa;", "ª", "gmi"],
	["&#xab;", "«", "gmi"],
	["&#xac;", "¬", "gmi"],
	["&#xad;", "­", "gmi"],
	["&#xae;", "®", "gmi"],
	["&#xaf;", "¯", "gmi"],
	["&#xb0;", "°", "gmi"],
	["&#xb1;", "±", "gmi"],
	["&#xb2;", "²", "gmi"],
	["&#xb3;", "³", "gmi"],
	["&#xb4;", "´", "gmi"],
	["&#xb5;", "µ", "gmi"],
	["&#xb6;", "¶", "gmi"],
	["&#xb7;", "·", "gmi"],
	["&#xb8;", "¸", "gmi"],
	["&#xb9;", "¹", "gmi"],
	["&#xba;", "º", "gmi"],
	["&#xbb;", "»", "gmi"],
	["&#xbc;", "¼", "gmi"],
	["&#xbd;", "½", "gmi"],
	["&#xbe;", "¾", "gmi"],
	["&#xbf;", "¿", "gmi"],
	["&#xc0;", "À", "gmi"],
	["&#xc1;", "Á", "gmi"],
	["&#xc2;", "Â", "gmi"],
	["&#xc3;", "Ã", "gmi"],
	["&#xc4;", "Ä", "gmi"],
	["&#xc5;", "Å", "gmi"],
	["&#xc6;", "Æ", "gmi"],
	["&#xc7;", "Ç", "gmi"],
	["&#xc8;", "È", "gmi"],
	["&#xc9;", "É", "gmi"],
	["&#xca;", "Ê", "gmi"],
	["&#xcb;", "Ë", "gmi"],
	["&#xcc;", "Ì", "gmi"],
	["&#xcd;", "Í", "gmi"],
	["&#xce;", "Î", "gmi"],
	["&#xcf;", "Ï", "gmi"],
	["&#xd0;", "?", "gmi"],
	["&#xd1;", "Ñ", "gmi"],
	["&#xd2;", "Ò", "gmi"],
	["&#xd3;", "Ó", "gmi"],
	["&#xd4;", "Ô", "gmi"],
	["&#xd5;", "Õ", "gmi"],
	["&#xd6;", "Ö", "gmi"],
	["&#xd7;", "×", "gmi"],
	["&#xd8;", "Ø", "gmi"],
	["&#xd9;", "Ù", "gmi"],
	["&#xda;", "Ú", "gmi"],
	["&#xdb;", "Û", "gmi"],
	["&#xdc;", "Ü", "gmi"],
	["&#xdd;", "Y", "gmi"],
	["&#xde;", "?", "gmi"],
	["&#xdf;", "ß", "gmi"],
	["&#xe0;", "à", "gmi"],
	["&#xe1;", "á", "gmi"],
	["&#xe2;", "â", "gmi"],
	["&#xe3;", "ã", "gmi"],
	["&#xe4;", "ä", "gmi"],
	["&#xe5;", "å", "gmi"],
	["&#xe6;", "æ", "gmi"],
	["&#xe7;", "ç", "gmi"],
	["&#xe8;", "è", "gmi"],
	["&#xe9;", "é", "gmi"],
	["&#xea;", "ê", "gmi"],
	["&#xeb;", "ë", "gmi"],
	["&#xec;", "ì", "gmi"],
	["&#xed;", "í", "gmi"],
	["&#xee;", "î", "gmi"],
	["&#xef;", "ï", "gmi"],
	["&#xf0;", "?", "gmi"],
	["&#xf1;", "ñ", "gmi"],
	["&#xf2;", "ò", "gmi"],
	["&#xf3;", "ó", "gmi"],
	["&#xf4;", "ô", "gmi"],
	["&#xf5;", "õ", "gmi"],
	["&#xf6;", "ö", "gmi"],
	["&#xf7;", "÷", "gmi"],
	["&#xf8;", "ø", "gmi"],
	["&#xf9;", "ù", "gmi"],
	["&#xfa;", "ú", "gmi"],
	["&#xfb;", "û", "gmi"],
	["&#xfc;", "ü", "gmi"],
	["&#xfd;", "y", "gmi"],
	["&#xfe;", "?", "gmi"],
	["&#xff;", "ÿ", "gmi"],

	["&#x11e;", "Ğ", "gmi"],
	["&#x11f;", "ğ", "gmi"],

	["&#x130;", "İ", "gmi"],
	["&#x131;", "ı", "gmi"],

	["&#x152;", "Œ", "gmi"],
	["&#x153;", "œ", "gmi"],

	["&#x15e;", "Ş", "gmi"],
	["&#x15f;", "ş", "gmi"],
	["&#x160;", "Š", "gmi"],
	["&#x161;", "š", "gmi"],

	["&#x178;", "Ÿ", "gmi"],

	["&#x192;", "ƒ", "gmi"],

	["&#x2013;", "–", "gmi"],
	["&#x2014;", "—", "gmi"],

	["&#x2018;", "‘", "gmi"],
	["&#x2019;", "’", "gmi"],
	["&#x201a;", "‚", "gmi"],

	["&#x201c;", "“", "gmi"],
	["&#x201d;", "”", "gmi"],
	["&#x201e;", "„", "gmi"],

	["&#x2020;", "†", "gmi"],
	["&#x2021;", "‡", "gmi"],
	["&#x2022;", "•", "gmi"],

	["&#x2026;", "…", "gmi"],

	["&#x2030;", "‰", "gmi"],

	["&#x20ac;", "€", "gmi"],

	["&#x2122;", "™", "gmi"],

	["&#x0020;", " ", "gmi"],
	["&#x0021;", "!", "gmi"],
	["&#x0022;", '"', "gmi"],
	["&#x0023;", "#", "gmi"],
	["&#x0024;", "$", "gmi"],
	["&#x0025;", "%", "gmi"],
	["&#x0026;", "&", "gmi"],
	["&#x0027;", "'", "gmi"],
	["&#x0028;", "(", "gmi"],
	["&#x0029;", ")", "gmi"],
	["&#x002a;", "*", "gmi"],
	["&#x002b;", "+", "gmi"],
	["&#x002c;", ",", "gmi"],
	["&#x002d;", "-", "gmi"],
	["&#x002e;", ",", "gmi"],
	["&#x002f;", "/", "gmi"],
	["&#x0030;", "0", "gmi"],
	["&#x0031;", "1", "gmi"],
	["&#x0032;", "2", "gmi"],
	["&#x0033;", "3", "gmi"],
	["&#x0034;", "4", "gmi"],
	["&#x0035;", "5", "gmi"],
	["&#x0036;", "6", "gmi"],
	["&#x0037;", "7", "gmi"],
	["&#x0038;", "8", "gmi"],
	["&#x0039;", "9", "gmi"],
	["&#x003a;", ":", "gmi"],
	["&#x003b;", ";", "gmi"],
	["&#x003c;", "<", "gmi"],
	["&#x003d;", "=", "gmi"],
	["&#x003e;", ">", "gmi"],
	["&#x003f;", "?", "gmi"],
	["&#x0040;", "@", "gmi"],
	["&#x0041;", "A", "gmi"],
	["&#x0042;", "B", "gmi"],
	["&#x0043;", "C", "gmi"],
	["&#x0044;", "D", "gmi"],
	["&#x0045;", "E", "gmi"],
	["&#x0046;", "F", "gmi"],
	["&#x0047;", "G", "gmi"],
	["&#x0048;", "H", "gmi"],
	["&#x0049;", "I", "gmi"],
	["&#x004a;", "J", "gmi"],
	["&#x004b;", "K", "gmi"],
	["&#x004c;", "L", "gmi"],
	["&#x004d;", "M", "gmi"],
	["&#x004e;", "N", "gmi"],
	["&#x004f;", "O", "gmi"],
	["&#x0050;", "P", "gmi"],
	["&#x0051;", "Q", "gmi"],
	["&#x0052;", "R", "gmi"],
	["&#x0053;", "S", "gmi"],
	["&#x0054;", "T", "gmi"],
	["&#x0055;", "U", "gmi"],
	["&#x0056;", "V", "gmi"],
	["&#x0057;", "W", "gmi"],
	["&#x0058;", "X", "gmi"],
	["&#x0059;", "Y", "gmi"],
	["&#x005a;", "Z", "gmi"],
	["&#x005b;", "[", "gmi"],
	["&#x005c;", "\\", "gmi"],
	["&#x005d;", "]", "gmi"],
	["&#x005e;", "^", "gmi"],
	["&#x005f;", "_", "gmi"],
	["&#x0060;", "`", "gmi"],
	["&#x0061;", "a", "gmi"],
	["&#x0062;", "b", "gmi"],
	["&#x0063;", "c", "gmi"],
	["&#x0064;", "d", "gmi"],
	["&#x0065;", "e", "gmi"],
	["&#x0066;", "f", "gmi"],
	["&#x0067;", "g", "gmi"],
	["&#x0068;", "h", "gmi"],
	["&#x0069;", "i", "gmi"],
	["&#x006a;", "j", "gmi"],
	["&#x006b;", "k", "gmi"],
	["&#x006c;", "l", "gmi"],
	["&#x006d;", "m", "gmi"],
	["&#x006e;", "n", "gmi"],
	["&#x006f;", "o", "gmi"],
	["&#x0070;", "p", "gmi"],
	["&#x0071;", "q", "gmi"],
	["&#x0072;", "r", "gmi"],
	["&#x0073;", "s", "gmi"],
	["&#x0074;", "t", "gmi"],
	["&#x0075;", "u", "gmi"],
	["&#x0076;", "v", "gmi"],
	["&#x0077;", "w", "gmi"],
	["&#x0078;", "x", "gmi"],
	["&#x0079;", "y", "gmi"],
	["&#x007a;", "z", "gmi"],
	["&#x007b;", "{", "gmi"],
	["&#x007c;", "|", "gmi"],
	["&#x007d;", "}", "gmi"],
	["&#x007e;", "~", "gmi"],

	["&#x00a0;", " ", "gmi"],
	["&#x00a1;", "¡", "gmi"],
	["&#x00a2;", "¢", "gmi"],
	["&#x00a3;", "£", "gmi"],
	["&#x00a4;", "¤", "gmi"],
	["&#x00a5;", "¥", "gmi"],
	["&#x00a6;", "¦", "gmi"],
	["&#x00a7;", "§", "gmi"],
	["&#x00a8;", "¨", "gmi"],
	["&#x00a9;", "©", "gmi"],
	["&#x00aa;", "ª", "gmi"],
	["&#x00ab;", "«", "gmi"],
	["&#x00ac;", "¬", "gmi"],
	["&#x00ad;", "­", "gmi"],
	["&#x00ae;", "®", "gmi"],
	["&#x00af;", "¯", "gmi"],
	["&#x00b0;", "°", "gmi"],
	["&#x00b1;", "±", "gmi"],
	["&#x00b2;", "²", "gmi"],
	["&#x00b3;", "³", "gmi"],
	["&#x00b4;", "´", "gmi"],
	["&#x00b5;", "µ", "gmi"],
	["&#x00b6;", "¶", "gmi"],
	["&#x00b7;", "·", "gmi"],
	["&#x00b8;", "¸", "gmi"],
	["&#x00b9;", "¹", "gmi"],
	["&#x00ba;", "º", "gmi"],
	["&#x00bb;", "»", "gmi"],
	["&#x00bc;", "¼", "gmi"],
	["&#x00bd;", "½", "gmi"],
	["&#x00be;", "¾", "gmi"],
	["&#x00bf;", "¿", "gmi"],
	["&#x00c0;", "À", "gmi"],
	["&#x00c1;", "Á", "gmi"],
	["&#x00c2;", "Â", "gmi"],
	["&#x00c3;", "Ã", "gmi"],
	["&#x00c4;", "Ä", "gmi"],
	["&#x00c5;", "Å", "gmi"],
	["&#x00c6;", "Æ", "gmi"],
	["&#x00c7;", "Ç", "gmi"],
	["&#x00c8;", "È", "gmi"],
	["&#x00c9;", "É", "gmi"],
	["&#x00ca;", "Ê", "gmi"],
	["&#x00cb;", "Ë", "gmi"],
	["&#x00cc;", "Ì", "gmi"],
	["&#x00cd;", "Í", "gmi"],
	["&#x00ce;", "Î", "gmi"],
	["&#x00cf;", "Ï", "gmi"],
	["&#x00d0;", "?", "gmi"],
	["&#x00d1;", "Ñ", "gmi"],
	["&#x00d2;", "Ò", "gmi"],
	["&#x00d3;", "Ó", "gmi"],
	["&#x00d4;", "Ô", "gmi"],
	["&#x00d5;", "Õ", "gmi"],
	["&#x00d6;", "Ö", "gmi"],
	["&#x00d7;", "×", "gmi"],
	["&#x00d8;", "Ø", "gmi"],
	["&#x00d9;", "Ù", "gmi"],
	["&#x00da;", "Ú", "gmi"],
	["&#x00db;", "Û", "gmi"],
	["&#x00dc;", "Ü", "gmi"],
	["&#x00dd;", "Y", "gmi"],
	["&#x00de;", "?", "gmi"],
	["&#x00df;", "ß", "gmi"],
	["&#x00e0;", "à", "gmi"],
	["&#x00e1;", "á", "gmi"],
	["&#x00e2;", "â", "gmi"],
	["&#x00e3;", "ã", "gmi"],
	["&#x00e4;", "ä", "gmi"],
	["&#x00e5;", "å", "gmi"],
	["&#x00e6;", "æ", "gmi"],
	["&#x00e7;", "ç", "gmi"],
	["&#x00e8;", "è", "gmi"],
	["&#x00e9;", "é", "gmi"],
	["&#x00ea;", "ê", "gmi"],
	["&#x00eb;", "ë", "gmi"],
	["&#x00ec;", "ì", "gmi"],
	["&#x00ed;", "í", "gmi"],
	["&#x00ee;", "î", "gmi"],
	["&#x00ef;", "ï", "gmi"],
	["&#x00f0;", "?", "gmi"],
	["&#x00f1;", "ñ", "gmi"],
	["&#x00f2;", "ò", "gmi"],
	["&#x00f3;", "ó", "gmi"],
	["&#x00f4;", "ô", "gmi"],
	["&#x00f5;", "õ", "gmi"],
	["&#x00f6;", "ö", "gmi"],
	["&#x00f7;", "÷", "gmi"],
	["&#x00f8;", "ø", "gmi"],
	["&#x00f9;", "ù", "gmi"],
	["&#x00fa;", "ú", "gmi"],
	["&#x00fb;", "û", "gmi"],
	["&#x00fc;", "ü", "gmi"],
	["&#x00fd;", "y", "gmi"],
	["&#x00fe;", "?", "gmi"],
	["&#x00ff;", "ÿ", "gmi"],

	["&#x011e;", "Ğ", "gmi"],
	["&#x011f;", "ğ", "gmi"],

	["&#x0130;", "İ", "gmi"],
	["&#x0131;", "ı", "gmi"],

	["&#x0152;", "Œ", "gmi"],
	["&#x0153;", "œ", "gmi"],

	["&#x015e;", "Ş", "gmi"],
	["&#x015f;", "ş", "gmi"],
	["&#x0160;", "Š", "gmi"],
	["&#x0161;", "š", "gmi"],

	["&#x0178;", "Ÿ", "gmi"],

	["&#x0192;", "ƒ", "gmi"],

	["&#x2013;", "–", "gmi"],
	["&#x2014;", "—", "gmi"],

	["&#x2018;", "‘", "gmi"],
	["&#x2019;", "’", "gmi"],
	["&#x201a;", "‚", "gmi"],

	["&#x201c;", "“", "gmi"],
	["&#x201d;", "”", "gmi"],
	["&#x201e;", "„", "gmi"],

	["&#x2020;", "†", "gmi"],
	["&#x2021;", "‡", "gmi"],
	["&#x2022;", "•", "gmi"],

	["&#x2026;", "…", "gmi"],

	["&#x2030;", "‰", "gmi"],

	["&#x20ac;", "€", "gmi"],

	["&#x2122;", "™", "gmi"],

	// type 2
	/* Windows-1254 -> Windows-1252 */

	["Þ", "Ş"],
	["þ", "ş"],
	["Ð", "Ğ"],
	["ð", "ğ"],
	["Ý", "İ"],
	["ý", "ı"],

	/* Windows-1254 -> ISO 8859-2 */
	["Đ", "Ğ"],
	["đ", "ğ"],
	["Ű", "Û"],
	["ű", "û"],

	// type 3
	/* UTF-8 -> ASCII */

	// single corrupt
	["Å", "Ş"],
	["ÅŸ", "ş"],
	["Ä", "Ğ"],
	["ÄŸ", "ğ"],
	["Ä°", "İ"],
	["Ä±", "ı"],
	["Ãœ", "Ü"],
	["Ã¼", "ü"],
	["Ã‡", "Ç"],
	["Ã§", "ç"],
	["Ã–", "Ö"],
	["Ã¶", "ö"],
	["Ã‚", "Â"],
	["Ã¢", "â"],
	["Ã›", "Û"],
	["Ã»", "û"],
	["Ã", "Î"],
	["Ã®", "î"],
	["â€œ", "“"],
	["â€™", "’"],

	["Åž", "Ş"], // Windows-1252
	["Äž", "Ğ"], // Windows-1252

	// double corrupt
	["Ã…Â", "Ş"],
	["Ã…Å¸", "ş"],
	["Ã„Â", "Ğ"],
	["Ã„Å¸", "ğ"],
	["Ã„Â°", "İ"],
	["Ã„Â±", "ı"],
	["ÃƒÅ“", "Ü"],
	["ÃƒÂ¼", "ü"],
	["Ãƒâ€¡", "Ç"],
	["ÃƒÂ§", "ç"],
	["Ãƒâ€š", "Â"],
	["ÃƒÂ¢", "â"],
	["Ãƒâ€º", "Û"],
	["ÃƒÂ»", "û"],
	["ÃƒÂ", "Î"],
	["ÃƒÂ®", "î"],
	["Ã¢â‚¬Å“", "“"],
	["Ã¢â‚¬â„¢", "’"],

	["Ã…Å¾", "Ş"], // Windows-1252
	["Ã„Å¾", "Ğ"], // Windows-1252
];

const replaceText = (inputText, find, replace, arg = "gm") => {
	return inputText.replace(new RegExp(find, arg), replace);
};

export const fixCorruptTRChars = (inputStr) => {
	let ret = inputStr;

	fixDict.forEach(
		(charArr) =>
			(ret = replaceText(ret, charArr[0], charArr[1], charArr[2]))
	);

	return ret;
};