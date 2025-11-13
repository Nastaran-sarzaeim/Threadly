export default function ProductDescription({ product }) {
    return (
      <div className="space-y-3">
        <h3 className="font-semibold mb-2 text-lg">توضیحات</h3>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>
  
        <div className="text-sm text-gray-500 space-y-1 mt-3">
          <p>
            <span className="font-semibold">دسته‌بندی:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">تگ‌ها:</span> {product.tags.join("، ")}
          </p>
        </div>
      </div>
    );
  }
  