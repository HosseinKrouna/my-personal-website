import styled, { css } from "styled-components";

const StyledSvg = styled.svg`
	${(props) =>
		props.fillColor &&
		css`
			path {
				fill: ${props.fillColor};
			}
		`}
	${(props) =>
		props.innerFillColor &&
		css`
			#innerPath {
				fill: ${props.innerFillColor};
			}
		`}
`;

const LinkedinIcon = (props) => (
	<StyledSvg
		id="svg"
		version="1.1"
		xmlns="http://www.w3.org/2000/svg"
		xlinkHref="http://www.w3.org/1999/xlink"
		width={props.width}
		height={props.height}
		viewBox={props.viewBox}
		fillColor="#F5F5F5"
		innerFillColor={props.innerFillColor}
	>
		<g id="svgg">
			<path
				id="path0"
				d=""
				stroke="none"
				fill="white"
				fillRule="evenodd"
			></path>
			<path
				id="innerPath"
				d="M39.600 5.385 C 39.270 5.463,37.650 5.751,36.000 6.025 C 34.350 6.299,32.829 6.675,32.620 6.862 C 32.411 7.048,31.736 7.200,31.120 7.200 C 30.504 7.200,30.000 7.380,30.000 7.600 C 30.000 7.820,29.460 8.000,28.800 8.000 C 28.140 8.000,27.600 8.180,27.600 8.400 C 27.600 8.620,27.240 8.800,26.800 8.800 C 26.360 8.800,26.000 8.980,26.000 9.200 C 26.000 9.420,25.766 9.600,25.480 9.600 C 24.744 9.600,22.807 10.541,22.803 10.900 C 22.801 11.065,22.610 11.200,22.378 11.200 C 20.482 11.200,8.800 21.528,8.800 23.205 C 8.800 23.422,8.650 23.600,8.468 23.600 C 8.285 23.600,7.880 24.095,7.568 24.700 C 7.256 25.305,6.897 25.890,6.769 26.000 C 6.247 26.450,3.701 32.389,2.910 35.000 C 1.484 39.714,1.248 40.875,1.004 44.400 C 0.874 46.270,0.595 47.860,0.384 47.933 C -0.120 48.108,-0.109 49.331,0.401 49.841 C 0.622 50.062,0.973 51.943,1.181 54.021 C 1.620 58.407,1.925 60.284,2.382 61.400 C 2.562 61.840,2.950 63.010,3.245 64.000 C 3.829 65.957,5.259 69.210,6.235 70.800 C 6.573 71.350,6.949 72.115,7.071 72.500 C 7.193 72.885,7.452 73.200,7.647 73.200 C 7.841 73.200,8.000 73.427,8.000 73.704 C 8.000 74.784,14.563 81.625,17.600 83.711 C 18.590 84.391,19.490 85.049,19.600 85.174 C 19.941 85.560,22.163 86.838,22.900 87.071 C 23.285 87.193,23.600 87.452,23.600 87.647 C 23.600 87.841,23.960 88.000,24.400 88.000 C 24.840 88.000,25.200 88.180,25.200 88.400 C 25.200 88.620,25.549 88.800,25.976 88.800 C 26.403 88.800,26.864 88.980,27.000 89.200 C 27.136 89.420,27.687 89.600,28.224 89.600 C 28.761 89.600,29.200 89.780,29.200 90.000 C 29.200 90.220,29.740 90.400,30.400 90.400 C 31.060 90.400,31.600 90.580,31.600 90.800 C 31.600 91.020,32.194 91.200,32.920 91.200 C 33.646 91.200,34.411 91.363,34.620 91.563 C 35.952 92.836,56.448 92.836,57.780 91.563 C 57.989 91.363,58.743 91.200,59.456 91.200 C 60.169 91.200,60.864 91.020,61.000 90.800 C 61.136 90.580,61.676 90.400,62.200 90.400 C 62.724 90.400,63.264 90.220,63.400 90.000 C 63.536 89.780,64.087 89.600,64.624 89.600 C 65.161 89.600,65.600 89.420,65.600 89.200 C 65.600 88.980,65.949 88.800,66.376 88.800 C 66.803 88.800,67.264 88.620,67.400 88.400 C 67.536 88.180,67.997 88.000,68.424 88.000 C 68.851 88.000,69.200 87.820,69.200 87.600 C 69.200 87.380,69.560 87.200,70.000 87.200 C 70.440 87.200,70.800 87.020,70.800 86.800 C 70.800 86.580,70.993 86.400,71.228 86.400 C 71.463 86.400,72.494 85.823,73.519 85.118 C 78.094 81.970,85.571 74.404,85.593 72.900 C 85.597 72.625,85.780 72.400,86.000 72.400 C 86.220 72.400,86.400 72.164,86.400 71.875 C 86.400 71.587,86.760 70.964,87.200 70.492 C 87.640 70.020,88.000 69.463,88.000 69.255 C 88.000 68.929,88.657 67.470,90.050 64.705 C 90.243 64.323,90.400 63.659,90.400 63.229 C 90.400 62.799,90.580 62.336,90.800 62.200 C 91.020 62.064,91.200 61.333,91.200 60.576 C 91.200 59.819,91.363 59.200,91.563 59.200 C 92.362 59.200,93.180 43.820,92.422 43.062 C 92.190 42.830,92.000 41.787,92.000 40.744 C 92.000 39.701,91.820 38.736,91.600 38.600 C 91.380 38.464,91.200 37.834,91.200 37.200 C 91.200 36.566,91.020 35.936,90.800 35.800 C 90.580 35.664,90.400 35.201,90.400 34.771 C 90.400 34.341,90.238 33.677,90.041 33.295 C 89.843 32.913,88.900 30.980,87.945 29.000 C 86.989 27.020,86.071 25.340,85.904 25.267 C 85.737 25.193,85.597 24.923,85.593 24.667 C 85.571 23.244,76.352 13.927,73.488 12.432 C 72.889 12.120,72.400 11.715,72.400 11.532 C 72.400 11.350,72.055 11.200,71.633 11.200 C 71.212 11.200,70.807 11.065,70.733 10.900 C 70.605 10.612,67.580 9.079,65.700 8.349 C 65.205 8.157,64.395 7.841,63.900 7.646 C 63.018 7.298,61.611 6.904,58.000 5.990 C 56.338 5.569,40.961 5.064,39.600 5.385 M51.700 21.463 C 53.405 21.572,54.800 21.827,54.800 22.030 C 54.800 22.234,55.419 22.400,56.176 22.400 C 56.933 22.400,57.664 22.580,57.800 22.800 C 57.936 23.020,58.378 23.200,58.783 23.200 C 59.567 23.200,63.229 25.021,65.332 26.456 C 69.135 29.052,74.400 36.006,74.400 38.433 C 74.400 38.829,74.580 39.264,74.800 39.400 C 75.020 39.536,75.200 40.177,75.200 40.824 C 75.200 41.471,75.380 42.000,75.600 42.000 C 75.826 42.000,76.000 43.135,76.000 44.605 C 76.000 46.038,76.219 47.561,76.486 47.989 C 76.868 48.600,76.868 49.057,76.486 50.112 C 76.219 50.852,76.000 52.378,76.000 53.505 C 76.000 54.631,75.820 55.664,75.600 55.800 C 75.380 55.936,75.200 56.489,75.200 57.029 C 75.200 57.569,75.039 58.323,74.842 58.705 C 74.645 59.087,73.913 60.585,73.216 62.033 C 70.533 67.605,62.389 74.400,58.394 74.400 C 57.983 74.400,57.536 74.580,57.400 74.800 C 57.264 75.020,56.659 75.200,56.056 75.200 C 55.453 75.200,54.789 75.366,54.580 75.570 C 53.509 76.612,39.298 76.610,38.220 75.568 C 38.011 75.365,37.334 75.200,36.715 75.200 C 36.096 75.200,35.277 75.035,34.895 74.834 C 34.513 74.633,33.120 73.987,31.800 73.399 C 29.757 72.488,25.447 69.649,24.800 68.787 C 24.276 68.090,21.743 65.046,21.300 64.582 C 21.025 64.293,20.800 63.789,20.800 63.462 C 20.800 63.135,20.665 62.807,20.500 62.733 C 19.948 62.488,18.400 59.136,18.400 58.186 C 18.400 57.670,18.240 57.148,18.044 57.027 C 16.547 56.102,16.540 43.553,18.035 40.705 C 18.236 40.323,18.400 39.684,18.400 39.285 C 18.400 38.387,19.293 36.407,19.700 36.403 C 19.865 36.401,20.000 36.040,20.000 35.600 C 20.000 35.160,20.136 34.800,20.302 34.800 C 20.469 34.800,20.829 34.305,21.103 33.700 C 21.738 32.298,25.373 28.411,27.200 27.181 C 27.970 26.663,28.690 26.139,28.800 26.017 C 29.276 25.489,34.178 23.200,34.833 23.200 C 35.229 23.200,35.664 23.020,35.800 22.800 C 35.936 22.580,36.656 22.400,37.400 22.400 C 38.144 22.400,38.864 22.220,39.000 22.000 C 39.136 21.780,40.576 21.600,42.200 21.600 C 43.909 21.600,45.267 21.415,45.424 21.162 C 45.592 20.889,46.242 20.826,47.147 20.995 C 47.946 21.144,49.995 21.355,51.700 21.463 M8.800 251.800 L 8.800 394.800 47.200 394.800 L 85.600 394.800 85.600 251.800 L 85.600 108.800 47.200 108.800 L 8.800 108.800 8.800 251.800 M131.200 251.800 L 131.200 394.800 173.998 394.800 L 216.796 394.800 216.952 316.100 C 217.100 240.890,217.201 233.089,218.035 232.220 C 218.236 232.011,218.400 231.077,218.400 230.144 C 218.400 229.211,218.580 228.336,218.800 228.200 C 219.020 228.064,219.200 227.243,219.200 226.376 C 219.200 225.509,219.380 224.800,219.600 224.800 C 219.820 224.800,220.000 224.260,220.000 223.600 C 220.000 222.940,220.180 222.400,220.400 222.400 C 220.620 222.400,220.800 222.045,220.800 221.612 C 220.800 221.179,221.143 220.214,221.562 219.467 C 221.982 218.720,222.567 217.680,222.862 217.155 C 223.158 216.630,223.490 216.110,223.601 216.000 C 223.711 215.890,224.066 215.260,224.391 214.600 C 224.715 213.940,225.344 212.933,225.790 212.363 C 226.235 211.792,227.140 210.632,227.800 209.786 C 229.367 207.776,230.448 206.704,232.291 205.330 C 233.121 204.711,233.896 204.076,234.014 203.918 C 234.423 203.370,240.516 200.400,241.232 200.400 C 241.628 200.400,242.052 200.240,242.173 200.044 C 242.294 199.849,243.069 199.574,243.896 199.434 C 244.723 199.293,246.570 198.970,248.000 198.716 C 253.198 197.790,277.084 198.206,278.180 199.241 C 278.389 199.438,278.963 199.600,279.456 199.600 C 279.949 199.600,280.464 199.780,280.600 200.000 C 280.736 200.220,281.152 200.399,281.524 200.397 C 282.375 200.393,288.736 203.552,289.775 204.496 C 290.202 204.883,290.787 205.200,291.075 205.200 C 291.364 205.200,291.600 205.341,291.600 205.514 C 291.600 205.686,292.185 206.167,292.900 206.583 C 296.949 208.936,304.386 217.858,307.417 224.000 C 308.232 225.650,309.056 227.313,309.249 227.695 C 309.442 228.077,309.600 228.662,309.600 228.995 C 309.600 229.328,309.780 229.600,310.000 229.600 C 310.220 229.600,310.400 230.039,310.400 230.576 C 310.400 231.113,310.580 231.664,310.800 231.800 C 311.020 231.936,311.200 232.577,311.200 233.224 C 311.200 233.871,311.380 234.400,311.600 234.400 C 311.820 234.400,312.000 235.109,312.000 235.976 C 312.000 236.843,312.180 237.664,312.400 237.800 C 312.620 237.936,312.800 239.016,312.800 240.200 C 312.800 241.384,312.980 242.464,313.200 242.600 C 313.464 242.763,313.600 268.604,313.600 318.824 L 313.600 394.800 356.800 394.800 L 400.000 394.800 400.000 313.680 C 400.000 251.573,399.889 232.449,399.525 232.085 C 399.213 231.773,398.943 228.893,398.741 223.705 C 398.571 219.357,398.258 214.450,398.044 212.800 C 396.999 204.710,396.793 203.270,396.443 201.600 C 394.194 190.889,393.114 186.521,392.367 185.105 C 392.165 184.723,392.000 184.059,392.000 183.629 C 392.000 183.199,391.820 182.736,391.600 182.600 C 391.380 182.464,391.200 181.924,391.200 181.400 C 391.200 180.876,391.020 180.336,390.800 180.200 C 390.580 180.064,390.400 179.423,390.400 178.776 C 390.400 178.129,390.220 177.600,390.000 177.600 C 389.780 177.600,389.600 177.240,389.600 176.800 C 389.600 176.360,389.420 176.000,389.200 176.000 C 388.980 176.000,388.800 175.728,388.800 175.395 C 388.800 175.062,388.643 174.477,388.450 174.095 C 386.952 171.120,386.400 169.847,386.400 169.362 C 386.400 169.053,386.220 168.800,386.000 168.800 C 385.780 168.800,385.600 168.535,385.600 168.212 C 385.600 167.889,385.212 166.944,384.738 166.112 C 384.265 165.280,383.500 163.880,383.038 163.000 C 382.577 162.120,382.110 161.310,382.000 161.200 C 381.890 161.090,381.365 160.190,380.833 159.200 C 379.761 157.204,375.022 150.238,373.910 149.025 C 373.520 148.598,373.200 148.085,373.200 147.885 C 373.200 147.685,372.704 147.044,372.099 146.460 C 371.493 145.877,370.008 144.232,368.799 142.804 C 366.100 139.619,365.857 139.375,361.406 135.400 C 359.435 133.640,357.404 131.795,356.893 131.300 C 356.382 130.805,355.800 130.400,355.600 130.400 C 355.400 130.400,354.786 129.950,354.236 129.400 C 353.686 128.850,353.075 128.400,352.878 128.400 C 352.680 128.400,351.954 127.860,351.263 127.200 C 350.572 126.540,349.898 126.000,349.765 126.000 C 349.632 126.000,349.046 125.660,348.462 125.244 C 346.139 123.591,335.302 117.984,331.200 116.314 C 330.650 116.090,329.887 115.748,329.505 115.553 C 329.123 115.359,328.448 115.200,328.005 115.200 C 327.562 115.200,327.200 115.020,327.200 114.800 C 327.200 114.580,326.660 114.400,326.000 114.400 C 325.340 114.400,324.800 114.220,324.800 114.000 C 324.800 113.780,324.361 113.600,323.824 113.600 C 323.287 113.600,322.736 113.420,322.600 113.200 C 322.464 112.980,321.834 112.800,321.200 112.800 C 320.566 112.800,319.936 112.620,319.800 112.400 C 319.664 112.180,318.843 112.000,317.976 112.000 C 317.109 112.000,316.400 111.820,316.400 111.600 C 316.400 111.380,315.680 111.200,314.800 111.200 C 313.920 111.200,313.200 111.020,313.200 110.800 C 313.200 110.580,312.221 110.400,311.024 110.400 C 309.827 110.400,308.736 110.220,308.600 110.000 C 308.464 109.780,307.229 109.600,305.856 109.600 C 304.483 109.600,303.174 109.414,302.947 109.187 C 302.137 108.377,275.106 109.171,274.220 110.031 C 274.011 110.234,272.717 110.400,271.344 110.400 C 269.971 110.400,268.736 110.580,268.600 110.800 C 268.464 111.020,267.654 111.200,266.800 111.200 C 265.946 111.200,265.136 111.380,265.000 111.600 C 264.864 111.820,264.144 112.000,263.400 112.000 C 262.656 112.000,261.936 112.180,261.800 112.400 C 261.664 112.620,260.854 112.800,260.000 112.800 C 259.146 112.800,258.336 112.980,258.200 113.200 C 258.064 113.420,257.524 113.600,257.000 113.600 C 256.476 113.600,255.936 113.780,255.800 114.000 C 255.664 114.220,255.149 114.400,254.656 114.400 C 254.163 114.400,253.589 114.543,253.380 114.718 C 253.171 114.893,252.280 115.265,251.400 115.545 C 249.538 116.136,248.966 116.366,246.000 117.720 C 244.790 118.273,242.990 119.088,242.000 119.532 C 240.396 120.252,236.325 122.434,233.620 124.024 C 233.082 124.341,232.283 124.915,231.845 125.300 C 231.407 125.685,230.813 126.000,230.525 126.000 C 230.236 126.000,230.000 126.141,230.000 126.314 C 230.000 126.486,229.455 126.949,228.789 127.343 C 228.123 127.736,227.175 128.450,226.682 128.929 C 224.982 130.581,221.847 132.816,221.424 132.677 C 220.949 132.520,220.453 129.096,220.167 124.000 C 220.062 122.130,219.807 120.240,219.600 119.800 C 219.393 119.360,219.141 117.470,219.040 115.600 C 218.939 113.730,218.735 111.435,218.586 110.500 L 218.316 108.800 174.758 108.800 L 131.200 108.800 131.200 251.800 M69.757 125.433 C 70.282 126.801,70.027 377.810,69.500 378.528 C 69.038 379.157,67.351 379.201,47.400 379.105 L 25.800 379.000 25.699 251.900 L 25.599 124.800 47.557 124.800 C 67.210 124.800,69.540 124.866,69.757 125.433 M203.848 125.278 C 204.011 125.541,204.280 127.386,204.447 129.378 C 204.613 131.370,205.041 135.970,205.397 139.600 C 206.441 150.232,206.873 154.836,207.077 157.500 L 207.268 160.000 214.007 160.000 L 220.746 160.000 221.573 158.838 C 222.028 158.199,222.400 157.479,222.400 157.238 C 222.400 156.997,222.550 156.800,222.732 156.800 C 222.915 156.800,223.320 156.305,223.632 155.700 C 223.944 155.095,224.298 154.510,224.419 154.400 C 224.540 154.290,225.076 153.570,225.610 152.800 C 228.119 149.184,236.232 141.200,237.398 141.200 C 237.632 141.200,238.083 140.840,238.400 140.400 C 238.717 139.960,239.162 139.600,239.388 139.599 C 239.615 139.599,240.430 139.059,241.200 138.400 C 241.970 137.741,242.825 137.201,243.100 137.201 C 243.375 137.200,243.600 137.020,243.600 136.800 C 243.600 136.580,243.945 136.400,244.367 136.400 C 244.788 136.400,245.193 136.263,245.267 136.095 C 245.427 135.728,253.069 131.958,255.600 130.997 C 271.833 124.837,295.401 123.352,313.099 127.374 C 317.005 128.262,324.463 130.730,325.068 131.335 C 325.214 131.481,325.663 131.600,326.067 131.600 C 326.470 131.600,326.800 131.780,326.800 132.000 C 326.800 132.220,327.025 132.399,327.300 132.397 C 327.933 132.393,334.554 135.688,334.733 136.096 C 334.807 136.263,335.122 136.400,335.433 136.400 C 335.745 136.400,336.000 136.559,336.000 136.753 C 336.000 136.948,336.315 137.207,336.700 137.329 C 337.609 137.617,339.553 138.812,340.558 139.700 C 340.994 140.085,341.521 140.400,341.729 140.400 C 341.936 140.400,342.397 140.724,342.753 141.119 C 343.109 141.514,344.030 142.275,344.800 142.808 C 346.879 144.249,347.079 144.411,349.728 146.800 C 353.147 149.883,355.812 152.602,357.100 154.321 C 357.705 155.128,358.769 156.366,359.464 157.072 C 360.159 157.777,361.053 158.905,361.450 159.577 C 361.847 160.250,362.314 160.800,362.486 160.800 C 362.659 160.800,362.800 161.036,362.800 161.325 C 362.800 161.613,363.120 162.198,363.511 162.625 C 364.950 164.194,366.345 166.409,368.791 171.006 C 369.378 172.109,370.148 173.459,370.502 174.006 C 370.856 174.553,371.523 175.990,371.984 177.200 C 372.887 179.571,373.488 180.996,374.047 182.095 C 374.241 182.477,374.400 183.062,374.400 183.395 C 374.400 183.728,374.580 184.000,374.800 184.000 C 375.020 184.000,375.200 184.439,375.200 184.976 C 375.200 185.513,375.380 186.064,375.600 186.200 C 375.820 186.336,376.000 186.977,376.000 187.624 C 376.000 188.271,376.180 188.800,376.400 188.800 C 376.620 188.800,376.800 189.340,376.800 190.000 C 376.800 190.660,376.980 191.200,377.200 191.200 C 377.420 191.200,377.600 191.740,377.600 192.400 C 377.600 193.060,377.780 193.600,378.000 193.600 C 378.220 193.600,378.400 194.219,378.400 194.976 C 378.400 195.733,378.580 196.464,378.800 196.600 C 379.020 196.736,379.200 197.546,379.200 198.400 C 379.200 199.254,379.380 200.064,379.600 200.200 C 379.820 200.336,380.000 201.121,380.000 201.944 C 380.000 202.767,380.162 203.611,380.359 203.820 C 380.727 204.209,380.939 205.414,381.623 211.000 C 381.839 212.760,382.211 215.730,382.451 217.600 C 382.905 221.139,383.439 376.510,383.004 378.300 L 382.785 379.200 356.606 379.200 C 331.521 379.200,330.412 379.169,330.031 378.458 C 329.774 377.978,329.582 353.339,329.488 308.758 C 329.378 256.943,329.223 239.303,328.862 237.800 C 328.598 236.700,328.098 234.450,327.750 232.800 C 327.086 229.647,325.826 225.481,325.181 224.305 C 324.971 223.923,324.800 223.248,324.800 222.805 C 324.800 222.362,324.620 222.000,324.400 222.000 C 324.180 222.000,324.000 221.640,324.000 221.200 C 324.000 220.760,323.820 220.400,323.600 220.400 C 323.380 220.400,323.200 220.147,323.200 219.838 C 323.200 219.284,321.620 215.990,321.168 215.600 C 321.040 215.490,320.681 214.815,320.370 214.100 C 320.059 213.385,319.669 212.800,319.502 212.800 C 319.336 212.800,319.200 212.564,319.200 212.275 C 319.200 211.987,318.864 211.391,318.454 210.950 C 318.044 210.510,317.490 209.742,317.223 209.243 C 316.956 208.745,316.495 208.036,316.198 207.668 C 311.802 202.225,309.742 199.900,307.989 198.400 C 306.831 197.410,305.505 196.236,305.042 195.791 C 304.579 195.347,303.570 194.545,302.800 194.011 C 302.030 193.476,301.310 192.928,301.200 192.793 C 299.945 191.251,290.137 186.277,285.400 184.780 C 283.860 184.293,282.240 183.751,281.800 183.575 C 281.360 183.399,280.370 183.144,279.600 183.009 C 278.830 182.875,277.030 182.560,275.600 182.310 C 272.285 181.731,255.429 181.752,250.400 182.341 C 248.310 182.586,245.610 182.896,244.400 183.030 C 243.190 183.164,242.029 183.437,241.820 183.637 C 241.611 183.837,240.947 184.000,240.344 184.000 C 239.741 184.000,239.136 184.180,239.000 184.400 C 238.864 184.620,238.234 184.800,237.600 184.800 C 236.966 184.800,236.336 184.980,236.200 185.200 C 236.064 185.420,235.601 185.600,235.171 185.600 C 234.741 185.600,234.077 185.766,233.695 185.968 C 233.313 186.171,231.245 187.193,229.100 188.240 C 226.955 189.286,225.200 190.290,225.200 190.471 C 225.200 190.652,224.965 190.800,224.678 190.800 C 224.183 190.800,223.681 191.210,219.543 195.000 C 217.667 196.719,215.607 199.015,214.000 201.180 C 213.450 201.920,212.775 202.755,212.500 203.035 C 212.225 203.314,212.000 203.736,212.000 203.971 C 212.000 204.207,211.820 204.400,211.600 204.400 C 211.380 204.400,211.200 204.670,211.200 205.000 C 211.200 205.330,211.020 205.600,210.800 205.600 C 210.580 205.600,210.400 205.836,210.400 206.125 C 210.400 206.413,210.040 207.036,209.600 207.508 C 209.160 207.980,208.800 208.644,208.800 208.983 C 208.800 209.322,208.620 209.600,208.400 209.600 C 208.180 209.600,208.000 209.960,208.000 210.400 C 208.000 210.840,207.820 211.200,207.600 211.200 C 207.380 211.200,207.200 211.545,207.200 211.967 C 207.200 212.388,207.059 212.793,206.886 212.867 C 206.547 213.011,203.796 221.429,203.444 223.400 C 203.326 224.060,203.120 225.230,202.987 226.000 C 202.854 226.770,202.586 227.760,202.392 228.200 C 202.198 228.640,201.937 229.990,201.812 231.200 C 201.688 232.410,201.389 234.840,201.148 236.600 C 200.853 238.754,200.625 262.555,200.450 309.400 C 200.308 347.680,200.148 379.045,200.096 379.100 C 199.705 379.508,148.094 379.134,147.680 378.720 C 147.171 378.211,146.935 126.755,147.443 125.433 C 147.762 124.602,203.336 124.449,203.848 125.278 "
				stroke="none"
				fill="#000000"
				fill-rule="evenodd"
			></path>
		</g>
	</StyledSvg>
);

export default LinkedinIcon;
