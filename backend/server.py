from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Dict, Any
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class BrandOverview(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    brand_name: str
    industry: str
    challenge: str
    solution: str
    old_tagline: str
    new_tagline: str
    year: str

class ResearchInsight(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    metric: str
    category: str

class BrandColor(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    hex_code: str
    usage: str
    type: str  # primary, accent, background

class Typography(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    font_family: str
    usage: str
    weights: List[str]
    type: str  # heading, body, accent

class MarketingCollateral(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    description: str
    type: str  # packaging, social, print, digital
    image_url: str

class ImpactMetric(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    metric_name: str
    before_value: str
    after_value: str
    improvement: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "Rebranding Case Study API"}

@api_router.get("/brand-overview")
async def get_brand_overview():
    return {
        "brand_name": "Vintage Brew",
        "industry": "Specialty Coffee & Café",
        "challenge": "A once-beloved coffee chain from the 1980s struggling to compete with modern specialty coffee shops. Outdated visual identity, declining foot traffic, and perception as 'old-fashioned' among younger demographics.",
        "solution": "Complete brand refresh that honors heritage while embracing contemporary design. New visual identity system that balances nostalgia with modernity, creating an inviting, premium coffee experience.",
        "old_tagline": "Your Neighborhood Coffee Since 1983",
        "new_tagline": "Crafted with Heritage, Brewed for Today",
        "year": "2024",
        "founded": "1983",
        "locations": "47 locations across the Pacific Northwest"
    }

@api_router.get("/research-insights")
async def get_research_insights():
    return [
        {
            "id": "1",
            "title": "Declining Millennial & Gen-Z Engagement",
            "description": "Only 18% of customers under 35. Perception of brand as outdated and disconnected from modern coffee culture.",
            "metric": "18% under 35",
            "category": "Demographics"
        },
        {
            "id": "2",
            "title": "Strong Heritage Recognition",
            "description": "82% of long-time customers value the brand's history and community presence. Emotional connection to nostalgia.",
            "metric": "82% loyalty",
            "category": "Brand Equity"
        },
        {
            "id": "3",
            "title": "Visual Identity Fatigue",
            "description": "Focus groups described existing branding as 'dated', 'corporate', and 'uninspiring'. Lacks the warmth of modern coffee shops.",
            "metric": "67% negative",
            "category": "Perception"
        },
        {
            "id": "4",
            "title": "Premium Experience Expectations",
            "description": "Modern consumers expect craft quality, ethical sourcing stories, and Instagram-worthy aesthetics from coffee brands.",
            "metric": "Quality First",
            "category": "Consumer Behavior"
        },
        {
            "id": "5",
            "title": "Digital Presence Gap",
            "description": "Minimal social media engagement and outdated website fail to tell brand story or showcase product quality.",
            "metric": "0.3% engagement",
            "category": "Digital"
        },
        {
            "id": "6",
            "title": "Community Connection Opportunity",
            "description": "Customers desire local involvement, sustainability messaging, and authentic connection to Pacific Northwest roots.",
            "metric": "High demand",
            "category": "Values"
        }
    ]

@api_router.get("/brand-colors")
async def get_brand_colors():
    return [
        {
            "id": "1",
            "name": "Heritage Espresso",
            "hex_code": "#3E2723",
            "usage": "Primary brand color, used for headlines, logos, and key messaging. Represents depth, richness, and coffee heritage.",
            "type": "primary"
        },
        {
            "id": "2",
            "name": "Warm Copper",
            "hex_code": "#D4756A",
            "usage": "Primary accent color for CTAs, highlights, and interactive elements. Brings warmth and approachability.",
            "type": "accent"
        },
        {
            "id": "3",
            "name": "Terracotta Clay",
            "hex_code": "#B8655F",
            "usage": "Secondary accent for depth and visual interest. Used in illustrations and decorative elements.",
            "type": "accent"
        },
        {
            "id": "4",
            "name": "Cream Canvas",
            "hex_code": "#FAF7F2",
            "usage": "Primary background color. Creates clean, inviting spaces that feel warm rather than sterile.",
            "type": "background"
        },
        {
            "id": "5",
            "name": "Soft Latte",
            "hex_code": "#F4EDE4",
            "usage": "Secondary background for sections, cards, and layered elements. Adds subtle depth.",
            "type": "background"
        },
        {
            "id": "6",
            "name": "Rich Charcoal",
            "hex_code": "#2C2420",
            "usage": "Body text and detailed content. Ensures readability while maintaining brand warmth.",
            "type": "text"
        }
    ]

@api_router.get("/typography")
async def get_typography():
    return [
        {
            "id": "1",
            "font_family": "Playfair Display",
            "usage": "Headlines, hero text, and section titles. Brings editorial elegance and sophistication.",
            "weights": ["Regular (400)", "SemiBold (600)", "Bold (700)"],
            "type": "heading"
        },
        {
            "id": "2",
            "font_family": "Inter",
            "usage": "Body text, subheadings, UI elements. Clean, readable, modern sans-serif for all content.",
            "weights": ["Regular (400)", "Medium (500)", "SemiBold (600)"],
            "type": "body"
        },
        {
            "id": "3",
            "font_family": "Inter",
            "usage": "Captions, labels, small text. Maintains consistency across all UI elements.",
            "weights": ["Regular (400)", "Medium (500)"],
            "type": "accent"
        }
    ]

@api_router.get("/marketing-collateral")
async def get_marketing_collateral():
    return [
        {
            "id": "1",
            "title": "Coffee Bag Packaging",
            "description": "Premium kraft paper bags with new logo and origin story. Emphasizes craft quality and ethical sourcing.",
            "type": "packaging",
            "image_url": "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800"
        },
        {
            "id": "2",
            "title": "Reusable Cup Series",
            "description": "Branded reusable cups featuring minimalist logo and sustainability messaging.",
            "type": "product",
            "image_url": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800"
        },
        {
            "id": "3",
            "title": "Social Media Campaign",
            "description": "Instagram and Facebook content showcasing craftsmanship, community stories, and product beauty.",
            "type": "social",
            "image_url": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800"
        },
        {
            "id": "4",
            "title": "Store Signage",
            "description": "Updated exterior and interior signage with new brand identity. Warm, inviting, contemporary.",
            "type": "environmental",
            "image_url": "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800"
        },
        {
            "id": "5",
            "title": "Menu Boards",
            "description": "Digital and printed menus with clear hierarchy, beautiful photography, and brand personality.",
            "type": "print",
            "image_url": "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800"
        },
        {
            "id": "6",
            "title": "Brand Guidelines Book",
            "description": "Comprehensive style guide documenting all brand elements, usage rules, and design principles.",
            "type": "documentation",
            "image_url": "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800"
        }
    ]

@api_router.get("/impact-metrics")
async def get_impact_metrics():
    return [
        {
            "id": "1",
            "metric_name": "Brand Perception Score",
            "before_value": "42/100",
            "after_value": "78/100",
            "improvement": "+86%"
        },
        {
            "id": "2",
            "metric_name": "Under-35 Demographics",
            "before_value": "18%",
            "after_value": "41%",
            "improvement": "+128%"
        },
        {
            "id": "3",
            "metric_name": "Social Media Engagement",
            "before_value": "0.3%",
            "after_value": "4.7%",
            "improvement": "+1,467%"
        },
        {
            "id": "4",
            "metric_name": "Customer Foot Traffic",
            "before_value": "-12% YoY",
            "after_value": "+23% YoY",
            "improvement": "35pt swing"
        },
        {
            "id": "5",
            "metric_name": "Average Transaction Value",
            "before_value": "$6.20",
            "after_value": "$9.40",
            "improvement": "+52%"
        },
        {
            "id": "6",
            "metric_name": "Brand Recognition",
            "before_value": "34%",
            "after_value": "67%",
            "improvement": "+97%"
        }
    ]

@api_router.get("/testimonials")
async def get_testimonials():
    return [
        {
            "id": "1",
            "name": "Sarah Chen",
            "role": "Longtime Customer",
            "quote": "Vintage Brew feels completely new while still being the place I've loved for years. They kept the soul but made it shine.",
            "image": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200"
        },
        {
            "id": "2",
            "name": "Marcus Rodriguez",
            "role": "Marketing Director, Local Business",
            "quote": "The rebrand is a masterclass in honoring heritage while embracing the future. Every touchpoint feels intentional.",
            "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200"
        },
        {
            "id": "3",
            "name": "Emma Thompson",
            "role": "First-Time Visitor (Age 24)",
            "quote": "I always thought Vintage Brew was just an old chain. The new look made me try it—and now I'm hooked. It's beautiful.",
            "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
        }
    ]


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()