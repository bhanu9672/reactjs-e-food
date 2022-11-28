// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

import health_solution_img_1 from "../images/natural_foods.png"
import health_solution_img_2 from "../images/safe_formalin.png"
import health_solution_img_3 from "../images/testy_food.png"
import health_solution_img_4 from "../images/exclusive_tem.png"

import our_service_img_1 from "../images/fresh_meat.png"
import our_service_img_2 from "../images/organic_tomato.png"
import our_service_img_3 from "../images/fresh_fish.png"
import our_service_img_4 from "../images/organic_guava.png"
import our_service_img_5 from "../images/fresh_orange.png"
import our_service_img_6 from "../images/img_natural_foods.png"

const products = [
	{
		id: "01",
		title: "Chicken Burger",
		price: 24.0,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
	},

	{
		id: "02",
		title: "Vegetarian Pizza",
		price: 115.0,
		image01: product_02_image_01,
		image02: product_02_image_02,
		image03: product_02_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "03",
		title: "Double Cheese Margherita",
		price: 110.0,
		image01: product_03_image_01,
		image02: product_03_image_02,
		image03: product_03_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "04",
		title: "Maxican Green Wave",
		price: 110.0,
		image01: product_04_image_01,
		image02: product_04_image_02,
		image03: product_04_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "05",
		title: "Cheese Burger",
		price: 24.0,
		image01: product_05_image_01,
		image02: product_05_image_02,
		image03: product_05_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},
	{
		id: "06",
		title: "Royal Cheese Burger",
		price: 24.0,
		image01: product_01_image_01,
		image02: product_01_image_02,
		image03: product_01_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "07",
		title: "Seafood Pizza",
		price: 115.0,
		image01: product_02_image_02,
		image02: product_02_image_01,
		image03: product_02_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "08",
		title: "Thin Cheese Pizza",
		price: 110.0,
		image01: product_03_image_02,
		image02: product_03_image_01,
		image03: product_03_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "09",
		title: "Pizza With Mushroom",
		price: 110.0,
		image01: product_04_image_02,
		image02: product_04_image_01,
		image03: product_04_image_03,
		category: "Pizza",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "10",
		title: "Classic Hamburger",
		price: 24.0,
		image01: product_05_image_02,
		image02: product_05_image_01,
		image03: product_05_image_03,
		category: "Burger",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "11",
		title: "Crunchy Bread ",
		price: 35.0,
		image01: product_06_image_01,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "12",
		title: "Delicious Bread ",
		price: 35.0,
		image01: product_06_image_02,
		image02: product_06_image_01,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},

	{
		id: "13",
		title: "Loaf Bread ",
		price: 35.0,
		image01: product_06_image_03,
		image02: product_06_image_02,
		image03: product_06_image_03,
		category: "Bread",

		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
	},
];

const health_solution = [
	{
		id: "1",
		title: "NATURAL FOODS",
		img: health_solution_img_1,
		desc: "Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons",
	},
	{
		id: "2",
		title: "SAFE FORMALIN",
		img: health_solution_img_2,
		desc: "Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons",
	},
	{
		id: "3",
		title: "100% TESTY FOOD",
		price: 110.0,
		img: health_solution_img_3,
		desc: "Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons",
	},
	{
		id: "4",
		title: "EXCLUSIVE TEAM",
		img: health_solution_img_4,
		desc: "Lorem ipsum dolor conse ctetur adipisicing elit sed do eiusmo tem incididunt labore apericons",
	},
];

const our_service = [
	{
		id: "1",
		title: "Fresh Meat",
		img: our_service_img_1,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
	{
		id: "2",
		title: "Organic Tomato",
		img: our_service_img_2,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
	{
		id: "3",
		title: "Fresh Fish",
		price: 110.0,
		img: our_service_img_3,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
	{
		id: "4",
		title: "Organic Guava",
		img: our_service_img_4,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
	{
		id: "5",
		title: "Fresh Orange",
		price: 110.0,
		img: our_service_img_5,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
	{
		id: "6",
		title: "Natural Foods",
		img: our_service_img_6,
		desc: "Lorem ipsum dolor sit ameconecte ur adipisicing elit, sed do eiusmod tempor incididunt labore dolore magnad",
	},
];

export default products;

export { health_solution,our_service };
