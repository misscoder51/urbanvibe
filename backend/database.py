from sqlalchemy import create_engine, Column, Integer, String, Float, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "sqlite:///./commerce.db"

engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    brand = Column(String)
    price = Column(Float)
    discount = Column(Integer, default=0)
    image = Column(String)
    category = Column(String)  # Men, Women
    type = Column(String)      # Shirt, Jeans, etc.
    description = Column(Text)
    sizes = Column(String)     # JSON or comma-separated string
    variants = Column(String)  # JSON string for color variants [{"color": "Red", "image": "..."}]
