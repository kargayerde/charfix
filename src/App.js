import { useState, useRef, useEffect } from "react";
import { fixCorruptTRChars } from "./stringUtils";

function App() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [message, setMessage] = useState("Paste (CTRL+V) to fix text.");
	const inputRef = useRef();
	const containerRef = useRef();

	// const importAllFavicons = () => {
	// 	const importAll = (r) => {
	// 		let images = {};
	// 		r.keys().forEach((item, index) => {
	// 			images[item.replace("./", "")] = r(item);
	// 		});
	// 		return images;
	// 	};
	// 	return importAll(require.context("./assets", false, /\.(png|jpe?g|svg)$/));
	// };

	const animateTitle = (speed = 600) => {
		let i = 0;
		const spaceChar = "⠀";
		const pageTitle = " ｗｈｙ ａｍ ｉ ｄｏｉｎｇ ｔｈｉｓ？ "
			.split(" ")
			.join(spaceChar)
			.split("")
			.join(spaceChar);

		let faviconLink = document.querySelector("link[rel~='icon']");
		// faviconLink.href = "favicon2";
		// faviconLink.href = "%PUBLIC_URL%/favicon2.ico";
		// faviconLink.href = "https://stackoverflow.com/favicon.ico";

		setInterval(() => {
			if (i === pageTitle.length) i = 0;
			document.title = pageTitle.slice(i) + pageTitle.slice(0, i);
			i++;
		}, speed);
	};

	const getRandomColor = ({
		hMin = 0,
		hMax = 359,
		sMin = 0,
		sMax = 100,
		lMin = 0,
		lMax = 100,
	} = {}) => {
		const getRandomIntegerInclusive = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		return `hsl(${getRandomIntegerInclusive(hMin, hMax)},${getRandomIntegerInclusive(
			sMin,
			sMax
		)}%,${getRandomIntegerInclusive(lMin, lMax)}%)`;
	};

	const handleInputChange = (e) => {
		setInputText(e.target.value);
		console.log({ eee: e.target });
		const fixedText = fixCorruptTRChars(e.target.value);
		setOutputText(fixedText);
		navigator.clipboard.writeText(fixedText);
		e.target.value = "";
		setMessage("Output copied to clipboard.\nPaste another to fix another.");
		containerRef.current.style.backgroundColor = getRandomColor({ lMin: 60, sMax: 30 });
	};

	useEffect(() => {
		animateTitle(300);
	}, []);

	return (
		<div className="App" on onClick={() => inputRef.current.focus()}>
			<div className="main-container" ref={containerRef}>
				<div className="message-container">{message}</div>
				{outputText ? (
					<div className="info-container">
						<div className="text-display">
							<div className="text-display-title">input:</div>
							<div className="text-display-inner">{inputText}</div>
						</div>
						<div className="text-display">
							<div className="text-display-title">output:</div>
							<div className="text-display-inner">{outputText}</div>
						</div>
					</div>
				) : null}
			</div>
			<textarea
				className="text-box"
				autoFocus
				onChange={(e) => handleInputChange(e)}
				onKeyDown={(e) => {
					console.log({ e });
					if (!e.ctrlKey || !"Vv".includes(e.key)) e.preventDefault();
				}}
				ref={inputRef}
				placeholder="Paste text to fix corrupt Turkish characters"
			></textarea>
		</div>
	);
}

export default App;
