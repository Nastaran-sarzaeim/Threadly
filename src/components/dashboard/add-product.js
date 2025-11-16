import { useState } from "react";

export default function AddProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");
  const [tags, setTags] = useState("");
  const [brand, setBrand] = useState("");
  const [sku, setSku] = useState("");
  const [weight, setWeight] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [warrantyInformation, setWarrantyInformation] = useState("");
  const [shippingInformation, setShippingInformation] = useState("");
  const [availabilityStatus, setAvailabilityStatus] = useState("");
  const [returnPolicy, setReturnPolicy] = useState("");
  const [minimumOrderQuantity, setMinimumOrderQuantity] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const newProduct = {
      title,
      description,
      category,
      price: Number(price),
      discountPercentage: Number(discountPercentage),
      rating: Number(rating),
      stock: Number(stock),
      tags: tags.split(",").map(t => t.trim()),
      brand,
      sku,
      weight: Number(weight),
      dimensions: {
        width: Number(width),
        height: Number(height),
        depth: Number(depth)
      },
      warrantyInformation,
      shippingInformation,
      availabilityStatus,
      returnPolicy,
      minimumOrderQuantity: Number(minimumOrderQuantity),
      thumbnail,
      images: images.split(",").map(img => img.trim())
    };

    try {
      const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(`محصول ${data.title} اضافه شد!`);
        setTitle(""); setDescription(""); setCategory(""); setPrice(""); setDiscountPercentage("");
        setRating(""); setStock(""); setTags(""); setBrand(""); setSku(""); setWeight("");
        setWidth(""); setHeight(""); setDepth(""); setWarrantyInformation(""); setShippingInformation("");
        setAvailabilityStatus(""); setReturnPolicy(""); setMinimumOrderQuantity(""); setThumbnail(""); setImages("");
      } else {
        setMessage("خطا: " + data.message);
      }
    } catch (error) {
      setMessage("خطا: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">اضافه کردن محصول</h2>
      <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="عنوان" value={title} onChange={e => setTitle(e.target.value)} className="border p-2 rounded" required/>
        <input type="text" placeholder="دسته‌بندی" value={category} onChange={e => setCategory(e.target.value)} className="border p-2 rounded" required/>
        <textarea placeholder="توضیحات" value={description} onChange={e => setDescription(e.target.value)} className="border p-2 rounded col-span-2" required/>
        <input type="number" placeholder="قیمت" value={price} onChange={e => setPrice(e.target.value)} className="border p-2 rounded" required/>
        <input type="number" placeholder="درصد تخفیف" value={discountPercentage} onChange={e => setDiscountPercentage(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="امتیاز" value={rating} onChange={e => setRating(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="موجودی" value={stock} onChange={e => setStock(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="تگ‌ها (با کاما جدا کنید)" value={tags} onChange={e => setTags(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="برند" value={brand} onChange={e => setBrand(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="SKU" value={sku} onChange={e => setSku(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="وزن" value={weight} onChange={e => setWeight(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="عرض" value={width} onChange={e => setWidth(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="ارتفاع" value={height} onChange={e => setHeight(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="عمق" value={depth} onChange={e => setDepth(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="اطلاعات گارانتی" value={warrantyInformation} onChange={e => setWarrantyInformation(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="اطلاعات ارسال" value={shippingInformation} onChange={e => setShippingInformation(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="وضعیت موجودی" value={availabilityStatus} onChange={e => setAvailabilityStatus(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="سیاست بازگشت" value={returnPolicy} onChange={e => setReturnPolicy(e.target.value)} className="border p-2 rounded"/>
        <input type="number" placeholder="حداقل تعداد سفارش" value={minimumOrderQuantity} onChange={e => setMinimumOrderQuantity(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="لینک تصویر شاخص" value={thumbnail} onChange={e => setThumbnail(e.target.value)} className="border p-2 rounded"/>
        <input type="text" placeholder="لینک تصاویر (با کاما جدا کنید)" value={images} onChange={e => setImages(e.target.value)} className="border p-2 rounded col-span-2"/>
        <button type="submit" disabled={loading} className="bg-yellow-700 text-white col-span-2 py-2 rounded hover:bg-yellow-800">
          {loading ? "در حال اضافه کردن..." : "اضافه کردن محصول"}
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
