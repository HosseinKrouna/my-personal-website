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

const GitHubIcon = (props) => (
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
				fill="#040404"
				fill-rule="evenodd"
			></path>
			<path
				id="path1"
				d="M189.758 5.203 C 183.153 5.480,175.979 6.083,172.400 6.661 C 168.332 7.318,166.002 7.657,164.200 7.854 C 163.100 7.975,162.029 8.237,161.820 8.437 C 161.611 8.637,160.666 8.800,159.720 8.800 C 158.774 8.800,158.000 8.980,158.000 9.200 C 158.000 9.420,157.291 9.600,156.424 9.600 C 155.557 9.600,154.736 9.780,154.600 10.000 C 154.464 10.220,153.643 10.400,152.776 10.400 C 151.909 10.400,151.200 10.580,151.200 10.800 C 151.200 11.020,150.581 11.200,149.824 11.200 C 149.067 11.200,148.336 11.380,148.200 11.600 C 148.064 11.820,147.511 12.000,146.971 12.000 C 146.431 12.000,145.677 12.162,145.295 12.361 C 144.913 12.560,143.790 12.937,142.800 13.200 C 141.810 13.463,140.687 13.840,140.305 14.039 C 139.923 14.238,139.259 14.400,138.829 14.400 C 138.399 14.400,137.936 14.580,137.800 14.800 C 137.664 15.020,137.149 15.200,136.656 15.200 C 136.163 15.200,135.589 15.343,135.380 15.518 C 135.171 15.693,134.280 16.065,133.400 16.345 C 132.520 16.624,131.350 17.045,130.800 17.280 C 130.250 17.515,129.395 17.863,128.900 18.054 C 128.405 18.244,127.595 18.562,127.100 18.760 C 126.605 18.957,125.570 19.349,124.800 19.630 C 124.030 19.911,122.230 20.665,120.800 21.305 C 119.370 21.946,117.570 22.739,116.800 23.069 C 116.030 23.398,115.087 23.832,114.705 24.034 C 114.323 24.235,113.738 24.400,113.405 24.400 C 113.072 24.400,112.800 24.580,112.800 24.800 C 112.800 25.020,112.455 25.200,112.033 25.200 C 111.612 25.200,111.207 25.342,111.133 25.515 C 111.060 25.688,110.010 26.319,108.800 26.916 C 106.491 28.057,104.338 29.261,104.000 29.601 C 103.890 29.711,103.260 30.065,102.600 30.388 C 101.940 30.711,100.648 31.476,99.728 32.088 C 98.808 32.699,97.941 33.200,97.800 33.200 C 97.659 33.200,96.759 33.740,95.800 34.400 C 94.841 35.060,93.946 35.600,93.811 35.600 C 93.676 35.600,93.349 35.780,93.083 36.000 C 92.817 36.220,90.533 37.781,88.008 39.470 C 85.482 41.159,83.063 42.869,82.632 43.270 C 82.202 43.672,81.679 44.000,81.471 44.000 C 81.264 44.000,80.803 44.324,80.447 44.719 C 80.091 45.114,79.170 45.871,78.400 46.400 C 77.630 46.929,76.730 47.649,76.400 48.000 C 76.070 48.351,75.170 49.077,74.400 49.615 C 73.630 50.152,72.460 51.110,71.800 51.743 C 71.140 52.377,69.790 53.547,68.800 54.343 C 66.319 56.339,53.033 69.661,50.593 72.600 C 49.497 73.920,48.143 75.450,47.585 76.000 C 47.026 76.550,46.135 77.630,45.604 78.400 C 45.072 79.170,44.351 80.070,44.000 80.400 C 43.649 80.730,42.929 81.630,42.400 82.400 C 41.871 83.170,41.327 83.890,41.192 84.000 C 41.056 84.110,39.752 85.910,38.295 88.000 C 36.837 90.090,35.454 92.018,35.220 92.285 C 34.987 92.552,34.588 93.227,34.334 93.785 C 34.080 94.343,33.720 94.800,33.536 94.800 C 33.351 94.800,33.200 94.988,33.200 95.218 C 33.200 95.448,32.300 96.970,31.200 98.600 C 30.100 100.230,29.200 101.737,29.200 101.949 C 29.200 102.160,29.065 102.393,28.900 102.467 C 28.524 102.634,27.225 104.764,26.929 105.700 C 26.807 106.085,26.548 106.400,26.353 106.400 C 26.159 106.400,26.000 106.745,26.000 107.167 C 26.000 107.588,25.843 107.993,25.652 108.067 C 25.461 108.140,23.740 111.440,21.828 115.400 C 19.916 119.360,18.183 122.913,17.976 123.295 C 17.769 123.677,17.600 124.262,17.600 124.595 C 17.600 124.928,17.420 125.200,17.200 125.200 C 16.980 125.200,16.800 125.472,16.800 125.805 C 16.800 126.138,16.641 126.723,16.447 127.105 C 16.252 127.487,15.916 128.250,15.700 128.800 C 15.484 129.350,15.079 130.340,14.800 131.000 C 14.289 132.209,13.823 133.361,13.100 135.200 C 12.884 135.750,12.548 136.513,12.353 136.895 C 12.159 137.277,12.000 137.941,12.000 138.371 C 12.000 138.801,11.820 139.264,11.600 139.400 C 11.380 139.536,11.200 140.087,11.200 140.624 C 11.200 141.161,11.020 141.600,10.800 141.600 C 10.580 141.600,10.400 142.140,10.400 142.800 C 10.400 143.460,10.220 144.000,10.000 144.000 C 9.780 144.000,9.600 144.529,9.600 145.176 C 9.600 145.823,9.420 146.464,9.200 146.600 C 8.980 146.736,8.800 147.366,8.800 148.000 C 8.800 148.634,8.620 149.264,8.400 149.400 C 8.180 149.536,8.000 150.166,8.000 150.800 C 8.000 151.434,7.840 152.052,7.644 152.173 C 7.449 152.294,7.196 152.979,7.084 153.696 C 6.971 154.413,6.400 157.160,5.816 159.800 C 3.999 167.998,2.807 175.086,1.980 182.600 C 1.786 184.360,1.446 189.656,1.224 194.369 C 1.001 199.120,0.638 203.122,0.411 203.349 C -0.147 203.907,-0.111 205.896,0.460 206.087 C 0.774 206.191,1.026 208.972,1.252 214.820 C 1.435 219.539,1.755 224.750,1.965 226.400 C 2.174 228.050,2.540 231.020,2.778 233.000 C 3.482 238.873,6.204 253.283,6.837 254.495 C 7.037 254.877,7.200 255.631,7.200 256.171 C 7.200 256.711,7.380 257.264,7.600 257.400 C 7.820 257.536,8.000 258.166,8.000 258.800 C 8.000 259.434,8.180 260.064,8.400 260.200 C 8.620 260.336,8.800 260.966,8.800 261.600 C 8.800 262.234,8.980 262.864,9.200 263.000 C 9.420 263.136,9.600 263.777,9.600 264.424 C 9.600 265.071,9.780 265.600,10.000 265.600 C 10.220 265.600,10.400 266.052,10.400 266.605 C 10.400 267.158,10.580 267.968,10.800 268.405 C 11.020 268.842,11.380 269.558,11.600 269.995 C 11.820 270.432,12.000 271.152,12.000 271.595 C 12.000 272.038,12.180 272.400,12.400 272.400 C 12.620 272.400,12.800 272.762,12.800 273.205 C 12.800 273.648,12.980 274.368,13.200 274.805 C 13.420 275.242,13.780 275.958,14.000 276.395 C 14.220 276.832,14.400 277.552,14.400 277.995 C 14.400 278.438,14.580 278.800,14.800 278.800 C 15.020 278.800,15.200 279.162,15.200 279.605 C 15.200 280.048,15.361 280.723,15.558 281.105 C 15.896 281.761,16.528 283.118,19.609 289.800 C 21.896 294.760,24.545 300.194,24.776 300.400 C 25.145 300.729,26.378 302.897,27.106 304.500 C 27.482 305.325,27.926 306.000,28.094 306.000 C 28.262 306.000,28.400 306.360,28.400 306.800 C 28.400 307.240,28.550 307.600,28.732 307.600 C 28.915 307.600,29.315 308.095,29.620 308.700 C 30.231 309.912,39.968 324.480,40.381 324.800 C 40.523 324.910,41.076 325.630,41.611 326.400 C 42.145 327.170,42.947 328.174,43.391 328.631 C 43.836 329.088,44.650 330.057,45.200 330.784 C 45.750 331.511,46.470 332.427,46.800 332.820 C 47.130 333.212,47.750 333.953,48.178 334.466 C 55.818 343.637,67.861 355.295,76.400 361.786 C 77.830 362.873,79.090 363.861,79.200 363.981 C 79.691 364.519,82.867 366.837,85.800 368.798 C 87.560 369.976,89.060 371.088,89.133 371.270 C 89.207 371.451,89.522 371.600,89.833 371.600 C 90.145 371.600,90.400 371.780,90.400 372.000 C 90.400 372.220,90.670 372.400,91.000 372.400 C 91.330 372.400,91.600 372.550,91.600 372.732 C 91.600 372.915,92.095 373.320,92.700 373.632 C 93.305 373.945,94.149 374.515,94.575 374.900 C 95.002 375.285,95.587 375.600,95.875 375.600 C 96.164 375.600,96.400 375.780,96.400 376.000 C 96.400 376.220,96.760 376.400,97.200 376.400 C 97.640 376.400,98.000 376.580,98.000 376.800 C 98.000 377.020,98.165 377.200,98.367 377.200 C 98.568 377.200,100.481 378.190,102.618 379.400 C 104.754 380.610,106.644 381.600,106.818 381.600 C 106.991 381.600,107.193 381.735,107.267 381.900 C 107.459 382.332,110.772 384.000,111.438 384.000 C 111.747 384.000,112.000 384.180,112.000 384.400 C 112.000 384.620,112.360 384.800,112.800 384.800 C 113.240 384.800,113.600 384.980,113.600 385.200 C 113.600 385.420,113.865 385.600,114.188 385.600 C 114.511 385.600,115.417 385.960,116.200 386.400 C 116.983 386.840,117.889 387.200,118.212 387.200 C 118.535 387.200,118.800 387.380,118.800 387.600 C 118.800 387.820,119.160 388.000,119.600 388.000 C 120.040 388.000,120.400 388.180,120.400 388.400 C 120.400 388.620,120.760 388.800,121.200 388.800 C 121.640 388.800,122.000 388.980,122.000 389.200 C 122.000 389.420,122.349 389.600,122.776 389.600 C 123.203 389.600,123.664 389.780,123.800 390.000 C 123.936 390.220,124.487 390.400,125.024 390.400 C 125.561 390.400,126.000 390.580,126.000 390.800 C 126.000 391.020,126.362 391.200,126.805 391.200 C 127.248 391.200,127.968 391.380,128.405 391.600 C 128.842 391.820,129.558 392.180,129.995 392.400 C 130.432 392.620,131.122 392.800,131.528 392.800 C 131.934 392.800,132.386 392.919,132.532 393.065 C 134.260 394.793,141.849 395.438,144.832 394.111 C 149.403 392.078,149.587 391.156,149.594 370.261 L 149.600 352.723 147.700 352.915 C 146.655 353.021,144.450 353.353,142.800 353.654 C 138.874 354.369,122.508 354.383,118.600 353.675 C 117.060 353.396,115.213 353.065,114.496 352.940 C 113.779 352.814,113.094 352.551,112.973 352.356 C 112.852 352.160,112.311 352.000,111.771 352.000 C 111.231 352.000,110.477 351.841,110.095 351.647 C 109.713 351.452,108.860 351.071,108.200 350.800 C 107.540 350.529,106.687 350.148,106.305 349.953 C 105.923 349.759,105.338 349.600,105.005 349.600 C 104.672 349.600,104.400 349.464,104.400 349.298 C 104.400 349.131,103.815 348.741,103.100 348.431 C 101.836 347.882,97.457 345.070,96.547 344.222 C 96.298 343.990,95.317 343.170,94.368 342.400 C 92.226 340.663,91.278 339.709,90.000 338.006 C 89.450 337.273,88.775 336.445,88.500 336.165 C 88.225 335.886,88.000 335.479,88.000 335.262 C 88.000 335.045,87.855 334.807,87.677 334.733 C 86.818 334.379,83.981 329.270,81.606 323.800 C 79.234 318.338,74.952 310.136,73.983 309.200 C 73.642 308.870,72.925 307.970,72.390 307.200 C 71.855 306.430,71.053 305.427,70.609 304.971 C 70.164 304.515,69.260 303.519,68.600 302.759 C 66.966 300.877,62.647 297.200,62.069 297.200 C 61.811 297.200,61.600 297.050,61.600 296.868 C 61.600 296.685,61.105 296.280,60.500 295.968 C 59.895 295.655,58.923 294.905,58.340 294.300 C 57.756 293.695,57.099 293.200,56.880 293.200 C 56.272 293.200,53.600 290.397,53.600 289.760 C 53.600 289.452,53.464 289.200,53.298 289.200 C 52.536 289.200,51.950 286.870,52.479 285.944 C 53.265 284.567,53.875 284.000,54.571 284.000 C 54.917 284.000,55.200 283.840,55.200 283.644 C 55.200 282.423,66.888 282.420,68.180 283.641 C 68.389 283.838,68.886 284.000,69.285 284.000 C 69.987 284.000,70.386 284.151,72.295 285.138 C 72.787 285.392,73.462 285.600,73.795 285.600 C 74.128 285.600,74.400 285.780,74.400 286.000 C 74.400 286.220,74.760 286.400,75.200 286.400 C 75.640 286.400,76.000 286.559,76.000 286.753 C 76.000 286.948,76.315 287.207,76.700 287.329 C 77.463 287.571,79.498 288.761,80.241 289.400 C 80.497 289.620,81.489 290.430,82.445 291.200 C 84.527 292.877,87.667 296.067,89.136 298.000 C 89.721 298.769,90.515 299.748,90.900 300.175 C 91.285 300.602,91.600 301.187,91.600 301.475 C 91.600 301.764,91.750 302.000,91.932 302.000 C 92.115 302.000,92.520 302.495,92.832 303.100 C 93.145 303.705,93.715 304.549,94.100 304.975 C 94.485 305.402,94.800 305.987,94.800 306.275 C 94.800 306.564,94.950 306.800,95.132 306.800 C 95.315 306.800,95.720 307.288,96.032 307.884 C 97.317 310.338,102.776 315.868,106.400 318.388 C 107.170 318.923,107.890 319.461,108.000 319.583 C 108.404 320.031,113.329 322.400,113.856 322.400 C 114.155 322.400,114.400 322.580,114.400 322.800 C 114.400 323.020,114.839 323.200,115.376 323.200 C 115.913 323.200,116.464 323.380,116.600 323.600 C 116.736 323.820,117.456 324.000,118.200 324.000 C 118.944 324.000,119.664 324.180,119.800 324.400 C 119.951 324.645,123.130 324.800,128.000 324.800 C 132.870 324.800,136.049 324.645,136.200 324.400 C 136.336 324.180,137.236 324.000,138.200 324.000 C 139.164 324.000,140.064 323.820,140.200 323.600 C 140.336 323.380,140.977 323.200,141.624 323.200 C 142.271 323.200,142.800 323.020,142.800 322.800 C 142.800 322.580,143.252 322.400,143.805 322.400 C 144.358 322.400,145.123 322.241,145.505 322.047 C 145.887 321.852,146.650 321.516,147.200 321.300 C 149.967 320.212,150.400 319.868,150.400 318.756 C 150.400 318.146,150.580 317.536,150.800 317.400 C 151.020 317.264,151.200 316.454,151.200 315.600 C 151.200 314.746,151.380 313.936,151.600 313.800 C 151.820 313.664,152.000 313.021,152.000 312.371 C 152.000 311.721,152.180 310.832,152.400 310.395 C 152.620 309.958,152.980 309.242,153.200 308.805 C 153.420 308.368,153.600 307.738,153.600 307.405 C 153.600 307.072,153.780 306.800,154.000 306.800 C 154.220 306.800,154.400 306.445,154.400 306.011 C 154.400 305.577,154.858 304.452,155.418 303.511 C 155.977 302.570,156.538 301.485,156.664 301.100 C 156.790 300.715,157.052 300.400,157.247 300.400 C 157.441 300.400,157.600 300.130,157.600 299.800 C 157.600 299.470,157.780 299.200,158.000 299.200 C 158.220 299.200,158.400 299.022,158.400 298.805 C 158.400 298.387,159.057 297.527,160.958 295.460 L 162.117 294.200 160.958 294.069 C 160.321 293.997,159.629 293.772,159.420 293.569 C 159.211 293.366,158.007 293.200,156.744 293.200 C 155.481 293.200,154.336 293.020,154.200 292.800 C 154.064 292.580,152.894 292.400,151.600 292.400 C 150.306 292.400,149.136 292.220,149.000 292.000 C 148.864 291.780,147.874 291.600,146.800 291.600 C 145.726 291.600,144.736 291.420,144.600 291.200 C 144.464 290.980,143.744 290.800,143.000 290.800 C 142.256 290.800,141.536 290.620,141.400 290.400 C 141.264 290.180,140.612 290.000,139.952 290.000 C 139.291 290.000,137.906 289.744,136.875 289.430 C 131.144 287.689,126.894 286.332,126.100 285.989 C 125.605 285.775,124.795 285.438,124.300 285.241 C 121.015 283.930,114.365 280.816,114.000 280.418 C 113.644 280.030,111.420 278.757,110.700 278.529 C 110.315 278.407,110.000 278.148,110.000 277.953 C 110.000 277.759,109.764 277.600,109.475 277.600 C 109.187 277.600,108.564 277.240,108.092 276.800 C 107.620 276.360,107.073 276.000,106.876 276.000 C 106.679 276.000,105.954 275.460,105.263 274.800 C 104.572 274.140,103.867 273.600,103.696 273.600 C 102.571 273.600,93.029 264.115,90.390 260.372 C 89.857 259.618,89.102 258.651,88.711 258.225 C 88.320 257.798,88.000 257.296,88.000 257.108 C 88.000 256.920,87.640 256.380,87.200 255.908 C 86.760 255.436,86.400 254.813,86.400 254.525 C 86.400 254.236,86.220 254.000,86.000 254.000 C 85.780 254.000,85.600 253.807,85.600 253.572 C 85.600 253.337,85.060 252.359,84.400 251.400 C 83.740 250.441,83.200 249.536,83.200 249.389 C 83.200 249.242,82.462 247.564,81.561 245.661 C 79.382 241.061,79.400 241.108,78.180 237.200 C 77.597 235.330,76.957 233.487,76.760 233.105 C 76.562 232.723,76.400 231.879,76.400 231.229 C 76.400 230.579,76.220 229.936,76.000 229.800 C 75.780 229.664,75.600 228.854,75.600 228.000 C 75.600 227.146,75.420 226.336,75.200 226.200 C 74.980 226.064,74.800 225.243,74.800 224.376 C 74.800 223.509,74.620 222.800,74.400 222.800 C 74.180 222.800,74.000 221.821,74.000 220.624 C 74.000 219.427,73.820 218.336,73.600 218.200 C 73.380 218.064,73.200 216.649,73.200 215.056 C 73.200 213.463,73.032 211.989,72.827 211.780 C 71.738 210.671,71.745 182.950,72.834 181.820 C 73.035 181.611,73.200 180.486,73.200 179.320 C 73.200 178.154,73.380 177.200,73.600 177.200 C 73.820 177.200,74.000 176.480,74.000 175.600 C 74.000 174.720,74.180 174.000,74.400 174.000 C 74.620 174.000,74.800 173.280,74.800 172.400 C 74.800 171.520,74.980 170.800,75.200 170.800 C 75.420 170.800,75.600 170.296,75.600 169.680 C 75.600 169.064,75.749 168.389,75.930 168.180 C 76.112 167.971,76.508 166.990,76.810 166.000 C 77.361 164.192,79.620 158.893,80.476 157.400 C 80.728 156.960,81.473 155.610,82.132 154.400 C 83.604 151.696,86.428 147.448,86.872 147.267 C 87.053 147.193,87.200 146.960,87.200 146.748 C 87.200 146.537,87.605 145.953,88.100 145.451 C 88.595 144.949,89.450 143.939,90.000 143.206 C 90.550 142.473,91.225 141.645,91.500 141.365 C 92.097 140.759,92.167 138.550,91.600 138.200 C 91.380 138.064,91.200 137.423,91.200 136.776 C 91.200 136.129,91.020 135.600,90.800 135.600 C 90.580 135.600,90.400 134.981,90.400 134.224 C 90.400 133.467,90.220 132.736,90.000 132.600 C 89.780 132.464,89.600 131.499,89.600 130.456 C 89.600 129.413,89.419 128.379,89.197 128.157 C 88.643 127.603,88.635 107.205,89.188 106.652 C 89.415 106.425,89.600 105.477,89.600 104.544 C 89.600 103.611,89.780 102.736,90.000 102.600 C 90.220 102.464,90.400 101.553,90.400 100.576 C 90.400 99.599,90.580 98.800,90.800 98.800 C 91.020 98.800,91.200 98.181,91.200 97.424 C 91.200 96.667,91.380 95.936,91.600 95.800 C 91.820 95.664,92.000 95.201,92.000 94.771 C 92.000 94.341,92.165 93.677,92.367 93.295 C 92.568 92.913,93.026 91.594,93.384 90.365 C 94.554 86.341,94.585 86.322,99.739 86.551 C 105.338 86.799,108.491 87.169,108.980 87.637 C 109.189 87.837,109.853 88.000,110.456 88.000 C 111.059 88.000,111.664 88.180,111.800 88.400 C 111.936 88.620,112.667 88.800,113.424 88.800 C 114.181 88.800,114.800 88.980,114.800 89.200 C 114.800 89.420,115.340 89.600,116.000 89.600 C 116.660 89.600,117.200 89.780,117.200 90.000 C 117.200 90.220,117.549 90.400,117.976 90.400 C 118.403 90.400,118.864 90.580,119.000 90.800 C 119.136 91.020,119.687 91.200,120.224 91.200 C 120.761 91.200,121.200 91.380,121.200 91.600 C 121.200 91.820,121.549 92.000,121.976 92.000 C 122.403 92.000,122.864 92.180,123.000 92.400 C 123.136 92.620,123.687 92.800,124.224 92.800 C 124.761 92.800,125.200 92.980,125.200 93.200 C 125.200 93.420,125.452 93.600,125.760 93.600 C 126.068 93.600,128.633 94.798,131.460 96.262 C 134.287 97.726,137.004 99.121,137.497 99.362 C 137.990 99.603,138.395 99.935,138.397 100.100 C 138.399 100.265,138.636 100.400,138.925 100.400 C 139.213 100.400,139.806 100.715,140.242 101.100 C 141.247 101.988,143.191 103.183,144.100 103.471 C 144.485 103.593,144.800 103.852,144.800 104.047 C 144.800 104.241,145.036 104.400,145.325 104.400 C 145.613 104.400,146.236 104.760,146.708 105.200 C 147.180 105.640,147.681 106.000,147.822 106.000 C 147.962 106.000,148.613 106.382,149.269 106.849 C 150.151 107.477,150.579 107.581,150.911 107.249 C 151.158 107.002,151.943 106.800,152.656 106.800 C 153.369 106.800,154.064 106.620,154.200 106.400 C 154.336 106.180,155.157 106.000,156.024 106.000 C 156.891 106.000,157.600 105.820,157.600 105.600 C 157.600 105.380,158.320 105.200,159.200 105.200 C 160.080 105.200,160.800 105.020,160.800 104.800 C 160.800 104.580,161.664 104.400,162.720 104.400 C 163.776 104.400,164.811 104.237,165.020 104.037 C 165.229 103.837,166.300 103.572,167.400 103.448 C 168.500 103.323,170.300 103.117,171.400 102.990 C 172.500 102.862,173.760 102.593,174.200 102.391 C 174.640 102.189,176.530 101.933,178.400 101.823 C 180.270 101.712,184.860 101.414,188.600 101.160 C 197.189 100.576,202.820 100.577,211.400 101.161 C 215.140 101.416,219.820 101.721,221.800 101.839 C 223.780 101.958,225.571 102.222,225.780 102.427 C 225.989 102.632,227.103 102.800,228.256 102.800 C 229.409 102.800,230.464 102.980,230.600 103.200 C 230.736 103.420,231.726 103.600,232.800 103.600 C 233.874 103.600,234.864 103.780,235.000 104.000 C 235.136 104.220,236.137 104.400,237.224 104.400 C 238.311 104.400,239.200 104.580,239.200 104.800 C 239.200 105.020,239.920 105.200,240.800 105.200 C 241.680 105.200,242.400 105.380,242.400 105.600 C 242.400 105.820,243.109 106.000,243.976 106.000 C 244.843 106.000,245.664 106.180,245.800 106.400 C 245.936 106.620,246.579 106.800,247.229 106.800 C 247.879 106.800,248.745 107.009,249.154 107.264 C 249.761 107.643,250.065 107.571,250.824 106.864 C 251.334 106.389,251.987 106.000,252.275 106.000 C 252.564 106.000,252.800 105.820,252.800 105.600 C 252.800 105.380,253.036 105.200,253.325 105.200 C 253.613 105.200,254.236 104.840,254.708 104.400 C 255.180 103.960,255.762 103.600,256.000 103.600 C 256.238 103.600,256.820 103.240,257.292 102.800 C 257.764 102.360,258.387 102.000,258.675 102.000 C 258.964 102.000,259.200 101.832,259.200 101.627 C 259.200 101.422,259.559 101.140,259.998 101.001 C 260.436 100.862,261.021 100.534,261.298 100.274 C 261.574 100.013,262.556 99.409,263.480 98.931 C 267.750 96.722,274.287 93.471,275.100 93.153 C 275.595 92.959,276.405 92.644,276.900 92.454 C 279.489 91.457,281.988 90.415,282.895 89.953 C 283.277 89.759,283.941 89.600,284.371 89.600 C 284.801 89.600,285.264 89.420,285.400 89.200 C 285.536 88.980,286.166 88.800,286.800 88.800 C 287.434 88.800,288.064 88.620,288.200 88.400 C 288.336 88.180,289.067 88.000,289.824 88.000 C 290.581 88.000,291.200 87.820,291.200 87.600 C 291.200 87.380,292.179 87.200,293.376 87.200 C 294.573 87.200,295.664 87.020,295.800 86.800 C 295.940 86.573,297.930 86.400,300.401 86.400 C 305.412 86.400,305.475 86.440,306.616 90.365 C 306.974 91.594,307.432 92.913,307.633 93.295 C 307.835 93.677,308.000 94.341,308.000 94.771 C 308.000 95.201,308.180 95.664,308.400 95.800 C 308.620 95.936,308.800 96.656,308.800 97.400 C 308.800 98.144,308.980 98.864,309.200 99.000 C 309.420 99.136,309.600 99.946,309.600 100.800 C 309.600 101.654,309.780 102.464,310.000 102.600 C 310.220 102.736,310.400 103.611,310.400 104.544 C 310.400 105.477,310.598 106.438,310.840 106.680 C 311.433 107.273,311.411 127.949,310.818 128.542 C 310.588 128.772,310.400 129.723,310.400 130.656 C 310.400 131.589,310.220 132.464,310.000 132.600 C 309.780 132.736,309.600 133.456,309.600 134.200 C 309.600 134.944,309.420 135.664,309.200 135.800 C 308.980 135.936,308.800 136.476,308.800 137.000 C 308.800 137.524,308.620 138.064,308.400 138.200 C 307.745 138.605,307.946 140.856,308.700 141.553 C 309.085 141.909,310.023 143.011,310.785 144.000 C 311.547 144.990,312.312 145.860,312.485 145.933 C 312.658 146.007,312.800 146.307,312.800 146.600 C 312.800 146.893,312.949 147.193,313.130 147.267 C 313.530 147.428,317.183 152.919,318.009 154.600 C 318.333 155.260,318.697 155.890,318.818 156.000 C 319.526 156.645,323.600 166.202,323.600 167.218 C 323.600 167.622,323.780 168.064,324.000 168.200 C 324.220 168.336,324.400 168.977,324.400 169.624 C 324.400 170.271,324.580 170.800,324.800 170.800 C 325.020 170.800,325.200 171.419,325.200 172.176 C 325.200 172.933,325.380 173.664,325.600 173.800 C 325.820 173.936,326.000 174.757,326.000 175.624 C 326.000 176.491,326.180 177.200,326.400 177.200 C 326.620 177.200,326.800 178.154,326.800 179.320 C 326.800 180.486,326.965 181.611,327.166 181.820 C 328.255 182.950,328.262 210.671,327.173 211.780 C 326.968 211.989,326.800 213.463,326.800 215.056 C 326.800 216.649,326.620 218.064,326.400 218.200 C 326.180 218.336,326.000 219.427,326.000 220.624 C 326.000 221.821,325.820 222.800,325.600 222.800 C 325.380 222.800,325.200 223.509,325.200 224.376 C 325.200 225.243,325.020 226.064,324.800 226.200 C 324.580 226.336,324.400 227.146,324.400 228.000 C 324.400 228.854,324.220 229.664,324.000 229.800 C 323.780 229.936,323.600 230.579,323.600 231.229 C 323.600 231.879,323.445 232.723,323.256 233.105 C 323.067 233.487,322.405 235.420,321.783 237.400 C 321.162 239.380,320.130 242.170,319.488 243.600 C 317.299 248.484,315.840 251.400,315.520 251.533 C 315.344 251.607,315.200 251.922,315.200 252.233 C 315.200 252.545,315.020 252.800,314.800 252.800 C 314.580 252.800,314.400 253.070,314.400 253.400 C 314.400 253.730,314.220 254.000,314.000 254.000 C 313.780 254.000,313.600 254.236,313.600 254.525 C 313.600 254.813,313.240 255.436,312.800 255.908 C 312.360 256.380,312.000 256.920,312.000 257.108 C 312.000 257.296,311.680 257.798,311.289 258.225 C 310.898 258.651,310.135 259.628,309.594 260.396 C 306.939 264.160,300.081 271.022,296.400 273.598 C 295.630 274.137,294.651 274.898,294.225 275.289 C 293.798 275.680,293.296 276.000,293.108 276.000 C 292.920 276.000,292.380 276.360,291.908 276.800 C 291.436 277.240,290.813 277.600,290.525 277.600 C 290.236 277.600,290.000 277.759,290.000 277.953 C 290.000 278.148,289.685 278.407,289.300 278.529 C 288.599 278.751,286.376 280.017,286.000 280.408 C 285.668 280.754,278.136 284.302,275.800 285.213 C 268.673 287.994,261.334 290.069,256.500 290.669 C 255.565 290.786,254.800 291.042,254.800 291.240 C 254.800 291.438,253.821 291.600,252.624 291.600 C 251.427 291.600,250.336 291.780,250.200 292.000 C 250.064 292.220,248.894 292.400,247.600 292.400 C 246.306 292.400,245.136 292.580,245.000 292.800 C 244.864 293.020,243.694 293.200,242.400 293.200 C 241.106 293.200,239.936 293.380,239.800 293.600 C 239.664 293.820,239.193 294.000,238.754 294.000 C 237.911 294.000,237.880 293.951,241.500 298.315 C 241.994 298.912,242.399 299.625,242.400 299.900 C 242.400 300.175,242.535 300.401,242.700 300.403 C 242.865 300.405,243.205 300.810,243.455 301.303 C 243.705 301.796,244.464 303.280,245.142 304.600 C 245.820 305.920,246.381 307.315,246.387 307.700 C 246.394 308.085,246.580 308.400,246.800 308.400 C 247.020 308.400,247.200 308.940,247.200 309.600 C 247.200 310.260,247.380 310.800,247.600 310.800 C 247.820 310.800,248.000 311.329,248.000 311.976 C 248.000 312.623,248.161 313.252,248.358 313.374 C 248.555 313.495,248.829 314.361,248.968 315.297 C 249.106 316.234,249.419 318.170,249.662 319.600 C 249.945 321.263,250.196 334.098,250.358 355.200 C 250.629 390.551,250.591 389.953,252.706 392.340 C 255.489 395.483,261.813 395.808,268.000 393.126 C 268.550 392.888,269.450 392.516,270.000 392.300 C 270.550 392.084,271.313 391.748,271.695 391.553 C 272.077 391.359,272.752 391.200,273.195 391.200 C 273.638 391.200,274.000 391.020,274.000 390.800 C 274.000 390.580,274.439 390.400,274.976 390.400 C 275.513 390.400,276.064 390.220,276.200 390.000 C 276.336 389.780,276.797 389.600,277.224 389.600 C 277.651 389.600,278.000 389.420,278.000 389.200 C 278.000 388.980,278.252 388.800,278.559 388.800 C 278.867 388.800,280.145 388.260,281.400 387.600 C 282.655 386.940,283.933 386.400,284.241 386.400 C 284.548 386.400,284.800 386.220,284.800 386.000 C 284.800 385.780,285.160 385.600,285.600 385.600 C 286.040 385.600,286.400 385.420,286.400 385.200 C 286.400 384.980,286.645 384.800,286.945 384.800 C 287.578 384.800,291.769 382.651,297.264 379.509 C 299.389 378.294,301.684 377.053,302.364 376.752 C 303.044 376.451,303.600 376.069,303.600 375.902 C 303.600 375.736,303.920 375.600,304.312 375.600 C 304.703 375.600,305.283 375.240,305.600 374.800 C 305.917 374.360,306.431 374.000,306.741 374.000 C 307.052 374.000,307.597 373.684,307.953 373.297 C 308.309 372.911,309.095 372.340,309.700 372.030 C 310.305 371.719,310.800 371.315,310.800 371.132 C 310.800 370.950,311.070 370.800,311.400 370.800 C 311.730 370.800,312.000 370.620,312.000 370.400 C 312.000 370.180,312.270 370.000,312.600 370.000 C 312.930 370.000,313.200 369.859,313.200 369.686 C 313.200 369.514,313.695 369.079,314.300 368.721 C 315.553 367.979,319.558 365.028,322.801 362.457 C 324.011 361.498,325.605 360.238,326.345 359.657 C 331.564 355.556,342.644 344.920,348.027 338.844 C 351.989 334.370,352.065 334.282,353.086 332.953 C 354.966 330.507,355.829 329.450,356.609 328.640 C 357.053 328.178,357.855 327.170,358.389 326.400 C 358.924 325.630,359.483 324.910,359.632 324.800 C 360.035 324.502,369.729 309.977,370.377 308.700 C 370.684 308.095,371.085 307.600,371.268 307.600 C 371.450 307.600,371.600 307.240,371.600 306.800 C 371.600 306.360,371.738 306.000,371.906 306.000 C 372.074 306.000,372.518 305.325,372.894 304.500 C 373.638 302.863,374.863 300.717,375.234 300.400 C 375.362 300.290,376.413 298.220,377.570 295.800 C 378.726 293.380,380.105 290.510,380.636 289.421 C 381.166 288.333,381.600 287.208,381.600 286.921 C 381.600 286.635,381.780 286.400,382.000 286.400 C 382.220 286.400,382.400 286.147,382.400 285.838 C 382.400 285.353,382.952 284.080,384.450 281.105 C 384.643 280.723,384.800 280.048,384.800 279.605 C 384.800 279.162,384.980 278.800,385.200 278.800 C 385.420 278.800,385.600 278.438,385.600 277.995 C 385.600 277.552,385.759 276.877,385.953 276.495 C 386.148 276.113,386.529 275.260,386.800 274.600 C 387.071 273.940,387.452 273.087,387.647 272.705 C 387.841 272.323,388.000 271.648,388.000 271.205 C 388.000 270.762,388.180 270.400,388.400 270.400 C 388.620 270.400,388.800 269.950,388.800 269.400 C 388.800 268.850,388.980 268.400,389.200 268.400 C 389.420 268.400,389.600 267.770,389.600 267.000 C 389.600 266.230,389.780 265.600,390.000 265.600 C 390.220 265.600,390.400 265.071,390.400 264.424 C 390.400 263.777,390.580 263.136,390.800 263.000 C 391.020 262.864,391.200 262.234,391.200 261.600 C 391.200 260.966,391.380 260.336,391.600 260.200 C 391.820 260.064,392.000 259.434,392.000 258.800 C 392.000 258.166,392.180 257.536,392.400 257.400 C 392.620 257.264,392.800 256.711,392.800 256.171 C 392.800 255.631,392.963 254.877,393.163 254.495 C 393.796 253.283,396.518 238.873,397.222 233.000 C 397.460 231.020,397.826 228.050,398.035 226.400 C 398.245 224.750,398.565 219.539,398.748 214.820 C 398.974 208.972,399.226 206.191,399.540 206.087 C 400.111 205.896,400.147 203.907,399.589 203.349 C 399.362 203.122,398.999 199.120,398.776 194.369 C 398.554 189.656,398.214 184.360,398.020 182.600 C 397.193 175.086,396.001 167.998,394.184 159.800 C 393.600 157.160,393.029 154.413,392.916 153.696 C 392.804 152.979,392.551 152.294,392.356 152.173 C 392.160 152.052,392.000 151.434,392.000 150.800 C 392.000 150.166,391.820 149.536,391.600 149.400 C 391.380 149.264,391.200 148.634,391.200 148.000 C 391.200 147.366,391.020 146.736,390.800 146.600 C 390.580 146.464,390.400 145.823,390.400 145.176 C 390.400 144.529,390.220 144.000,390.000 144.000 C 389.780 144.000,389.600 143.460,389.600 142.800 C 389.600 142.140,389.420 141.600,389.200 141.600 C 388.980 141.600,388.800 141.161,388.800 140.624 C 388.800 140.087,388.620 139.536,388.400 139.400 C 388.180 139.264,388.000 138.801,388.000 138.371 C 388.000 137.941,387.841 137.277,387.647 136.895 C 387.316 136.245,386.979 135.447,386.000 133.000 C 385.780 132.450,385.396 131.505,385.146 130.900 C 384.897 130.295,384.516 129.350,384.300 128.800 C 384.084 128.250,383.748 127.487,383.553 127.105 C 383.359 126.723,383.200 126.138,383.200 125.805 C 383.200 125.472,383.020 125.200,382.800 125.200 C 382.580 125.200,382.400 124.928,382.400 124.595 C 382.400 124.262,382.231 123.677,382.024 123.295 C 381.817 122.913,380.084 119.360,378.172 115.400 C 376.260 111.440,374.539 108.140,374.348 108.067 C 374.157 107.993,374.000 107.603,374.000 107.200 C 374.000 106.797,373.865 106.407,373.700 106.333 C 373.324 106.166,372.025 104.036,371.729 103.100 C 371.607 102.715,371.348 102.400,371.153 102.400 C 370.959 102.400,370.800 102.212,370.800 101.982 C 370.800 101.752,369.900 100.230,368.800 98.600 C 367.700 96.970,366.800 95.448,366.800 95.218 C 366.800 94.988,366.649 94.800,366.464 94.800 C 366.280 94.800,365.920 94.343,365.666 93.785 C 365.412 93.227,365.010 92.552,364.774 92.285 C 364.538 92.018,363.265 90.270,361.944 88.400 C 359.037 84.283,357.958 82.834,357.300 82.165 C 357.025 81.886,356.800 81.530,356.800 81.375 C 356.800 81.221,356.476 80.803,356.081 80.447 C 355.686 80.091,354.928 79.170,354.396 78.400 C 353.865 77.630,352.974 76.550,352.415 76.000 C 351.857 75.450,350.500 73.920,349.400 72.600 C 346.922 69.625,333.647 56.308,331.200 54.342 C 330.210 53.546,328.860 52.377,328.200 51.743 C 327.540 51.110,326.370 50.152,325.600 49.615 C 324.830 49.077,323.930 48.351,323.600 48.000 C 323.270 47.649,322.370 46.929,321.600 46.400 C 320.830 45.871,319.909 45.114,319.553 44.719 C 319.197 44.324,318.736 44.000,318.529 44.000 C 318.321 44.000,317.798 43.672,317.368 43.270 C 316.937 42.869,314.518 41.159,311.992 39.470 C 309.467 37.781,307.183 36.220,306.917 36.000 C 306.651 35.780,306.319 35.600,306.179 35.600 C 306.038 35.600,305.446 35.261,304.862 34.847 C 304.278 34.433,303.150 33.730,302.355 33.284 C 299.313 31.581,298.994 31.394,298.800 31.199 C 298.690 31.089,298.060 30.729,297.400 30.400 C 296.740 30.071,296.110 29.711,296.000 29.601 C 295.566 29.165,286.021 24.301,283.200 23.077 C 282.430 22.743,280.580 21.914,279.090 21.235 C 277.599 20.556,276.202 20.000,275.985 20.000 C 275.767 20.000,275.277 19.841,274.895 19.647 C 274.513 19.452,273.705 19.092,273.100 18.847 C 272.495 18.601,271.505 18.199,270.900 17.953 C 270.295 17.708,269.487 17.348,269.105 17.153 C 268.723 16.959,268.136 16.800,267.800 16.800 C 267.464 16.800,266.832 16.620,266.395 16.400 C 265.958 16.180,265.242 15.820,264.805 15.600 C 264.368 15.380,263.659 15.200,263.229 15.200 C 262.799 15.200,262.336 15.020,262.200 14.800 C 262.064 14.580,261.524 14.400,261.000 14.400 C 260.476 14.400,259.936 14.220,259.800 14.000 C 259.664 13.780,259.034 13.600,258.400 13.600 C 257.766 13.600,257.136 13.420,257.000 13.200 C 256.864 12.980,256.223 12.800,255.576 12.800 C 254.929 12.800,254.400 12.620,254.400 12.400 C 254.400 12.180,253.871 12.000,253.224 12.000 C 252.577 12.000,251.936 11.820,251.800 11.600 C 251.664 11.380,250.944 11.200,250.200 11.200 C 249.456 11.200,248.736 11.020,248.600 10.800 C 248.464 10.580,247.744 10.400,247.000 10.400 C 246.256 10.400,245.536 10.220,245.400 10.000 C 245.264 9.780,244.443 9.600,243.576 9.600 C 242.709 9.600,242.000 9.420,242.000 9.200 C 242.000 8.980,241.226 8.800,240.280 8.800 C 239.334 8.800,238.389 8.637,238.180 8.437 C 237.971 8.237,236.900 7.975,235.800 7.854 C 234.700 7.734,232.630 7.450,231.200 7.223 C 219.851 5.423,203.509 4.627,189.758 5.203 "
				stroke="none"
				fill="#000000"
				fill-rule="evenodd"
			></path>
		</g>
	</StyledSvg>
);

export default GitHubIcon;
