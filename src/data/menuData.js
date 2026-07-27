import friesImg from '../assets/images/fries.png'
import burgerImg from '../assets/images/burger.png'
import saladImg from '../assets/images/salad.png'
import pizzaImg from '../assets/images/pizza.png'
import sandwichImg from '../assets/images/sandwich.png'
import chickenImg from '../assets/images/chicken.png'

export const menuItems = [
  {
    id: 1,
    name: 'Seasoned Fries Basket',
    price: 8.00,
    image: friesImg,
    category: 'Sides',
    description: 'Golden, perfectly seasoned fries with fresh herbs and our signature spice blend.',
    featured: true,
  },
  {
    id: 2,
    name: 'Double Cheeseburger',
    price: 18.00,
    image: burgerImg,
    category: 'Burgers',
    description: 'Two juicy beef patties with melted cheese, caramelized onions, and pickles on a brioche bun.',
    featured: true,
  },
  {
    id: 3,
    name: 'Cobb Salad Bowl',
    price: 16.00,
    image: saladImg,
    category: 'Salads',
    description: 'Fresh greens topped with grilled chicken, avocado, tomatoes, and crumbled feta cheese.',
    featured: true,
  },
  {
    id: 4,
    name: 'Artisanal Pepperoni Pizza',
    price: 17.60,
    originalPrice: 22.00,
    onSale: true,
    category: 'Pizza',
    image: pizzaImg,
    description: 'Hand-tossed dough topped with premium pepperoni, fresh mozzarella, and house-made sauce.',
  },
  {
    id: 5,
    name: 'Spicy Chicken Sandwich',
    price: 14.00,
    category: 'Sandwiches',
    image: sandwichImg,
    description: 'Crispy breaded chicken with fresh lettuce, tomato, and spicy sauce on a toasted bun.',
  },
  {
    id: 6,
    name: 'Crispy Fried Chicken',
    price: 16.00,
    category: 'Chicken',
    image: chickenImg,
    description: 'Golden crispy fried chicken pieces with our secret blend of herbs and spices.',
  },
  {
    id: 7,
    name: 'House BBQ Ribs',
    price: 28.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    description: 'Slow-cooked tender pork ribs glazed in our smoky house-made barbecue sauce.',
    featured: true,
  },
  {
    id: 8,
    name: 'Deli Reuben Sandwich',
    price: 12.80,
    originalPrice: 16.00,
    onSale: true,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    description: 'Corned beef, Swiss cheese, sauerkraut, and Russian dressing grilled on rye bread.',
    featured: true,
  },
]

export const services = [
  {
    id: 1,
    title: 'On-Site Catering',
    description: 'Comprehensive food and beverage service delivered to your chosen venue, including menu customization and staffing.',
    link: '/services',
    linkText: 'Request Quote',
  },
  {
    id: 2,
    title: 'Private Dining Room',
    description: 'Exclusive access to a dedicated space accommodating up to 30 guests, featuring a prix fixe menu and personalized service.',
    link: '/services',
    linkText: 'Reserve',
  },
  {
    id: 3,
    title: "Chef's Table Experience",
    description: 'A multi-course tasting menu prepared in front of guests, accompanied by detailed culinary commentary.',
    link: '/services',
    linkText: 'Book Now',
  },
]

export const serviceDetails = [
  {
    id: 1,
    title: "Chef's Tasting Menu",
    price: '₹7,500 per guest',
    description: 'A curated eight-course progression showcases seasonal produce and innovative pairings, enabling diners to explore nuanced flavors under the guidance of our lead chef.',
  },
  {
    id: 2,
    title: 'Private Table Experience',
    price: '₹50,000 minimum spend',
    description: 'Designed for intimate gatherings, this service allocates a dedicated service professional and tailored menu, ensuring seamless coordination and elevated privacy.',
  },
  {
    id: 3,
    title: 'Corporate Catering Solutions',
    price: 'Starting at ₹3,500 per person',
    description: 'Organizations can engage our kitchen to deliver scalable, presentation-ready meals that streamline event logistics while maintaining restaurant-quality standards.',
  },
]

export const subscriptions = [
  {
    id: 1,
    title: 'Silver Subscription',
    price: 499.00,
    period: 'month',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    description: 'Access to monthly recipe collections, seasonal ingredient guides, and early booking for special dining events.',
  },
  {
    id: 2,
    title: 'Gold Subscription',
    price: 999.00,
    period: 'month',
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    description: 'Everything in Silver plus live virtual cooking classes, exclusive chef interviews, and priority reservations at all locations.',
  },
  {
    id: 3,
    title: 'Platinum Subscription',
    price: 1999.00,
    period: 'month',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    description: 'Full access to all content, private one-on-one sessions with our head chef, complimentary monthly tasting menu, and VIP event invitations.',
  },
]

