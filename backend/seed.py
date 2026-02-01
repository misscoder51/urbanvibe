from database import SessionLocal, Product, Base, engine
import json

# Create tables
Base.metadata.create_all(bind=engine)

def seed_data():
    session = SessionLocal()
    
    # Clear existing data
    session.query(Product).delete()
    
    products = [
        # --- MEN ---
        {
            "name": "Jordan Oversized Tee",
            "brand": "Nike",
            "price": 2499,
            "discount": 0,
            "image": "/images/tee_orange.png",
            "category": "Men",
            "type": "Shirt",
            "description": "Premium cotton oversized t-shirt with Jordan branding.",
            "sizes": "S, M, L, XL, XXL, 3XL",
            "variants": json.dumps([
                {"color": "Orange", "image": "/images/tee_orange.png", "hex": "#FF8C00"},
                {"color": "Beige", "image": "/images/tee_beige.png", "hex": "#F5F5DC"},
                {"color": "Green", "image": "/images/tee_green.png", "hex": "#2E8B57"},
                {"color": "Brown", "image": "/images/tee_brown.png", "hex": "#8B4513"}
            ])
        },
        {
            "name": "Classic White Oxford",
            "brand": "Polo Ralph Lauren",
            "price": 5500,
            "discount": 10,
            "image": "/images/oxford_white.png",
            "category": "Men",
            "type": "Shirt",
            "description": "Premium cotton oxford shirt for formal wear.",
            "sizes": "S, M, L, XL"
        },
        {
            "name": "Mens 555 Relaxed Straight Fit Jean",
            "brand": "Levis",
            "price": 3999,
            "discount": 20,
            "image": "/images/levis_jeans.png",
            "category": "Men",
            "type": "Jeans",
            "description": "Light wash skinny jeans with distressed knees.",
            "sizes": "30, 32, 34"
        },
        {
            "name": "Black Bomber Jacket",
            "brand": "Zara",
            "price": 5990,
            "discount": 0,
            "image": "/images/bomber_jacket.png",
            "category": "Men",
            "type": "Jacket",
            "description": "Classic faux leather bomber jacket with ribbed trims.",
            "sizes": "M, L, XL"
        },
        {
            "name": "Air Max 90",
            "brand": "Nike",
            "price": 11999,
            "discount": 0,
            "image": "/images/airmax_grey_navy.png",
            "category": "Men",
            "type": "Shoes",
            "description": "Iconic Air Max 90 sneakers in various colorways.",
            "sizes": "8, 9, 10, 11",
            "variants": json.dumps([
                {"color": "Grey/Navy", "image": "/images/airmax_grey_navy.png", "hex": "#708090"},
                {"color": "White/Red", "image": "/images/airmax_white_red.png", "hex": "#FF0000"},
                {"color": "Black/Purple", "image": "/images/airmax_black_purple.png", "hex": "#800080"},
                {"color": "Grey/Black", "image": "/images/airmax_grey_black.png", "hex": "#404040"},
                {"color": "White/Orange", "image": "/images/airmax_white_orange.png", "hex": "#FFA500"}
            ])
        },
        {
            "name": "Cargo Joggers",
            "brand": "H&M",
            "price": 2299,
            "discount": 0,
            "image": "/images/cargo_joggers.png",
            "category": "Men",
            "type": "Trousers",
            "description": "Olive green cargo joggers.",
            "sizes": "30, 32, 34, 36"
        },
        {
            "name": "Denim Trucker Jacket",
            "brand": "Levis",
            "price": 4500,
            "discount": 10,
            "image": "/images/levis_trucker.jpg",
            "category": "Men",
            "type": "Jacket",
            "description": "Vintage wash denim jacket.",
            "sizes": "M, L, XL"
        },
        {
            "name": "High-Top Sneakers",
            "brand": "Vans",
            "price": 3999,
            "discount": 0,
            "image": "/images/vans_high_top.jpg",
            "category": "Men",
            "type": "Shoes",
            "description": "Classic black and white high-top sneakers.",
            "sizes": "7, 8, 9, 10"
        },
        {
            "name": "Flannel Check Shirt",
            "brand": "Superdry",
            "price": 3299,
            "discount": 30,
            "image": "/images/superdry_flannel.png",
            "category": "Men",
            "type": "Shirt",
            "description": "Red and black flannel shirt.",
            "sizes": "S, M, L"
        },
        {
            "name": "Chino Shorts",
            "brand": "Gap",
            "price": 1999,
            "discount": 20,
            "image": "/images/gap_chinos.png",
            "category": "Men",
            "type": "Shorts",
            "description": "Beige cotton chino shorts.",
            "sizes": "30, 32, 34"
        },


        # --- WOMEN ---
        {
            "name": "Floral Summer Dress",
            "brand": "Zara",
            "price": 3590,
            "discount": 10,
            "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Dress",
            "description": "Elegant floral print midi dress.",
            "sizes": "XS, S, M, L"
        },
        {
            "name": "Mom Jeans",
            "brand": "H&M",
            "price": 2299,
            "discount": 0,
            "image": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Jeans",
            "description": "High-waisted vintage style jeans.",
            "sizes": "26, 28, 30"
        },
        {
            "name": "Leather Tote Bag",
            "brand": "Mango",
            "price": 4500,
            "discount": 20,
            "image": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Bag",
            "description": "Classic tan leather tote bag.",
            "sizes": "One Size"
        },
        {
            "name": "Chunky Sneakers",
            "brand": "Puma",
            "price": 5999,
            "discount": 15,
            "image": "/images/puma_chunky.png",
            "category": "Women",
            "type": "Shoes",
            "description": "White chunky sneakers with pink accents.",
            "sizes": "5, 6, 7"
        },
        {
            "name": "Silk Blouse",
            "brand": "Massimo Dutti",
            "price": 5990,
            "discount": 0,
            "image": "/images/massimo_blouse.png",
            "category": "Women",
            "type": "Top",
            "description": "Luxurious white silk blouse.",
            "sizes": "S, M, L"
        },
        {
            "name": "White Mini Skirt",
            "brand": "Forever 21",
            "price": 1499,
            "discount": 30,
            "image": "https://images.unsplash.com/photo-1582142306909-195724d33ffc?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Skirt",
            "description": "Faux leather mini skirt.",
            "sizes": "S, M, L"
        },
        {
            "name": "Red Party Dress",
            "brand": "Urbanic",
            "price": 2890,
            "discount": 10,
            "image": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Dress",
            "description": "Stunning red satin evening dress.",
            "sizes": "S, M, L"
        },
        {
            "name": "Crossbody Bag",
            "brand": "Aldo",
            "price": 3999,
            "discount": 25,
            "image": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80",
            "category": "Women",
            "type": "Bag",
            "description": "Quilted black crossbody bag.",
            "sizes": "One Size"
        },
        {
            "name": "Denim Shorts",
            "brand": "Levis",
            "price": 2299,
            "discount": 15,
            "image": "/images/levis_shorts.png",
            "category": "Women",
            "type": "Shorts",
            "description": "Classic blue denim shorts.",
            "sizes": "26, 28, 30"
        },
        {
            "name": "Ankle Boots",
            "brand": "Steve Madden",
            "price": 6999,
            "discount": 10,
            "image": "/images/steve_madden_boots.png",
            "category": "Women",
            "type": "Shoes",
            "description": "Black leather ankle boots.",
            "sizes": "6, 7, 8"
        },

        # --- HOME & LIVING ---
        # Fixed: Modern Floor Lamp (User provided image)
        {
            "name": "Modern Floor Lamp",
            "brand": "West Elm",
            "price": 8900,
            "discount": 10,
            "image": "/images/lamp.jpg",
            "category": "Home",
            "type": "Decor",
            "description": "Arc floor lamp with marble base.",
            "sizes": "One Size"
        },
        # Fixed: Linen Duvet Set (User provided image)
        {
            "name": "Linen Duvet Set",
            "brand": "Parachute",
            "price": 12000,
            "discount": 0,
            "image": "/images/duvet.jpg",
            "category": "Home",
            "type": "Bedding",
            "description": "100% pure linen duvet cover set in grey.",
            "sizes": "Queen, King"
        },
        {
            "name": "Ceramic Plant Pot",
            "brand": "Pottery Barn",
            "price": 1500,
            "discount": 0,
            "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
            "category": "Home",
            "type": "Decor",
            "description": "White ceramic planter with stand.",
            "sizes": "Medium, Large"
        },
        {
            "name": "Cast Iron Skillet",
            "brand": "Le Creuset",
            "price": 15000,
            "discount": 5,
            "image": "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=600&q=80",
            "category": "Home",
            "type": "Kitchen",
            "description": "Signature enamelled cast iron skillet.",
            "sizes": "26cm"
        },
        # Fixed: Velvet Cushion - Consolidated with Variants
        {
            "name": "Velvet Cushion Cover",
            "brand": "H&M Home",
            "price": 999,
            "discount": 0,
            "image": "/images/cushion_teal.png", # Default image
            "category": "Home",
            "type": "Decor",
            "description": "Soft velvet cushion cover in a cotton blend. Concealed zipper. Available in multiple colors to match any decor.",
            "sizes": "50x50",
            "variants": json.dumps([
                {"color": "Teal", "image": "/images/cushion_teal.png", "hex": "#008080"},
                {"color": "Pink", "image": "/images/cushion_pink.png", "hex": "#FFC0CB"},
                {"color": "Burgundy", "image": "/images/cushion_burgundy.png", "hex": "#800020"},
                {"color": "Green", "image": "/images/cushion_green.png", "hex": "#008000"}
            ])
        },
        # Fixed: Cotton Bath Towels (User provided image)
        {
            "name": "Cotton Bath Towels",
            "brand": "Spaces",
            "price": 1499,
            "discount": 30,
            "image": "/images/cotton_bath_towels.jpg",
            "category": "Home",
            "type": "Bath",
            "description": "Set of 2 fluffy cotton bath towels.",
            "sizes": "Set"
        },
        # Fixed: Wall Mirror (User provided image)
        {
            "name": "Wall Mirror",
            "brand": "IKEA",
            "price": 4500,
            "discount": 0,
            "image": "/images/wall_mirror.jpg",
            "category": "Home",
            "type": "Decor",
            "description": "Full length wall mirror with silver frame.",
            "sizes": "160x40cm"
        },
        # Fixed: Scented Candle - Consolidated with Variants
        {
            "name": "3-Wick Scented Candle",
            "brand": "Bath & Body Works",
            "price": 2499,
            "discount": 0,
            "image": "/images/candle_vanilla.png",
            "category": "Home",
            "type": "Decor",
            "description": "Premium 3-wick scented candle. Made with natural essential oils and a soy wax blend.",
            "sizes": "14.5 oz",
            "variants": json.dumps([
                {"color": "Vanilla Bean Noel", "image": "/images/candle_vanilla.png", "hex": "#F5F5DC"},
                {"color": "Falling Flurries", "image": "/images/candle_flurries.png", "hex": "#C0C0C0"},
                {"color": "Winter Candy Apple", "image": "/images/candle_apple.png", "hex": "#FF0000"},
                {"color": "Champagne Toast", "image": "/images/candle_champagne.png", "hex": "#FFC1CC"}
            ])
        },
        # Fixed: Dinner Set (User provided image)
        {
            "name": "Dinner Set",
            "brand": "Corelle",
            "price": 6000,
            "discount": 15,
            "image": "/images/dinner_set.jpg",
            "category": "Home",
            "type": "Kitchen",
            "description": "16-piece white dinnerware set with floral pattern.",
            "sizes": "Set"
        },

        # --- BEAUTY ---
        {
            "name": "Matte Lipstick Red",
            "brand": "MAC",
            "price": 2200,
            "discount": 0,
            "image": "/images/mac_lipstick.png",
            "category": "Beauty",
            "type": "Makeup",
            "description": "Classic Ruby Woo matte lipstick.",
            "sizes": "3g"
        },
        {
            "name": "Vitamin C Serum",
            "brand": "The Ordinary",
            "price": 1100,
            "discount": 0,
            "image": "/images/ordinary_serum.png",
            "category": "Beauty",
            "type": "Skincare",
            "description": "Brightening and anti-aging serum.",
            "sizes": "30ml"
        },
        {
            "name": "N°5 Perfume",
            "brand": "Chanel",
            "price": 14500,
            "discount": 0,
            "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80",
            "category": "Beauty",
            "type": "Fragrance",
            "description": "Timeless floral fragrance.",
            "sizes": "50ml, 100ml"
        },
        {
            "name": "Eyeshadow Palette",
            "brand": "Huda Beauty",
            "price": 5500,
            "discount": 20,
            "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80",
            "category": "Beauty",
            "type": "Makeup",
            "description": "Rose gold eyeshadow palette.",
            "sizes": "18 shades"
        },
        {
            "name": "Hair Straightener",
            "brand": "Dyson",
            "price": 35000,
            "discount": 5,
            "image": "/images/dyson_straightener.png",
            "category": "Beauty",
            "type": "Haircare",
            "description": "Corrale hair straightener.",
            "sizes": "One Size"
        },
        {
            "name": "Face Moisturizer",
            "brand": "Clinique",
            "price": 3200,
            "discount": 10,
            "image": "/images/clinique_moisturizer.png",
            "category": "Beauty",
            "type": "Skincare",
            "description": "Moisture surge 100H auto-replenishing hydrator.",
            "sizes": "50ml"
        },
        {
            "name": "Volumizing Mascara",
            "brand": "Maybelline",
            "price": 499,
            "discount": 15,
            "image": "/images/maybelline_mascara.png",
            "category": "Beauty",
            "type": "Makeup",
            "description": "Hyper curl waterproof mascara.",
            "sizes": "10ml"
        },
        {
            "name": "Clay Mask",
            "brand": "Innisfree",
            "price": 1100,
            "discount": 0,
            "image": "/images/innisfree_mask.png",
            "category": "Beauty",
            "type": "Skincare",
            "description": "Volcanic pore clearing clay mask.",
            "sizes": "100ml"
        },
        {
            "name": "Luxury Body Wash",
            "brand": "Loccitane",
            "price": 2100,
            "discount": 5,
            "image": "/images/loccitane_wash.png",
            "category": "Beauty",
            "type": "Bath",
            "description": "Almond shower oil.",
            "sizes": "250ml"
        }
    ]

    for p_data in products:
        product = Product(**p_data)
        session.add(product)
    
    session.commit()
    print("Database seeded successfully with CORRECTED high-quality data!")

if __name__ == "__main__":
    seed_data()
