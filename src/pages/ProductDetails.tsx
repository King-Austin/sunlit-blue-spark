import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { products as initialProducts } from "@/data/products";
import { COMPANY_PHONE, formatWhatsAppMessage } from "@/lib/constants";
import Footer from "@/components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) setProducts(JSON.parse(savedProducts));
  }, []);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // normalize fields (support both demo data and supabase shape)
  const imageSrc = (product as any).image_url || (product as any).image || (product as any).imageUrl || '';
  const priceVal = (product as any).price ?? (product as any).price_cents ?? 0;
  const description = (product as any).fullDescription || (product as any).full_description || (product as any).short_description || '';

  const formatPrice = (v: number) => `₦${new Intl.NumberFormat('en-NG').format(v)}`;

  const whatsappMessage = formatWhatsAppMessage(product.name, formatPrice(priceVal));
  const whatsappLink = `https://wa.me/${COMPANY_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6">
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
              </Button>
            </Link>
          </div>

          <div className="bg-white">
            <div className="max-w-4xl mx-auto p-6">
              <div className="space-y-6">
                {/* Product Image */}
                <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                  {imageSrc ? (
                    <img src={imageSrc} alt={product.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No image</div>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-gray-900">
                    {product.name}
                  </h1>

                  <div className="text-3xl font-bold text-gray-900">
                    {formatPrice(Number(priceVal))}
                  </div>

                  <div className="prose prose-gray max-w-none">
                    <h2 className="text-xl font-semibold mb-4">Product Description</h2>
                    {description.split('\n').map((line, i) => (
                      line.trim() && (
                        <p key={i} className="flex items-start gap-2 text-gray-600 mb-2">
                          <span className="mt-1.5">•</span>
                          <span>{line.trim()}</span>
                        </p>
                      )
                    ))}
                  </div>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block mt-8 mb-8">
                    <Button className="w-full bg-[#25D366] hover:bg-[#1fa855] text-white h-14 text-lg font-semibold">
                      <MessageCircle className="h-6 w-6 mr-2" />
                      Order via WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default ProductDetails;
