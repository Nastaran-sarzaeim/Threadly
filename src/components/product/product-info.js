"use client";
import { formatPrice } from "@/utils/utils";
import { useSnackbar } from "notistack";
import { useUser } from "../login/context/user-context";
import CustomAlert from "../alert/custom-alert";
import { Minus, Add, Trash } from "iconsax-react";

export default function ProductInfo({ product }) {
  const { user, updateCart, removeFromCart } = useUser();
  const { enqueueSnackbar } = useSnackbar();

  const existingItem = user?.cart?.find((item) => item.id === product.id);
  const quantity = existingItem?.qty || 0;

  const handleAdd = () => {
    if (!user) {
      enqueueSnackbar(
        <CustomAlert message="لطفاً ابتدا وارد حساب خود شوید" type="error" />,
        { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
      );
      return;
    }

    const newCart = existingItem
      ? user.cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      )
      : [...(user.cart || []), { ...product, qty: 1 }];

    updateCart(newCart);
    enqueueSnackbar(
      <CustomAlert message="تعداد محصول افزایش یافت" type="success" />,
      { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
    );
  };

  const handleRemove = () => {
    if (!user) return;

    if (quantity > 1) {
      const newCart = user.cart.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
      updateCart(newCart);
      enqueueSnackbar(
        <CustomAlert message="تعداد محصول کاهش یافت" type="warning" />,
        { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
      );
    } else {
      removeFromCart(product.id);
      enqueueSnackbar(
        <CustomAlert message="محصول از سبد خرید حذف شد" type="error" />,
        { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
      );
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product.name,
          text: `این محصول عالیه: ${product.name}`,
          url: window.location.href,
        })
        .catch((error) => console.log("خطا در اشتراک‌گذاری:", error));
    } else {
      enqueueSnackbar(
        <CustomAlert message="امکان اشتراک‌گذاری روی این مرورگر وجود ندارد." type="warning" />,
        { anchorOrigin: { vertical: "top", horizontal: "center" }, autoHideDuration: 2000 }
      );
    }
  };

  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg text-gray-700">{formatPrice(product.price)}</p>

      <div className="flex items-center gap-1 text-yellow-500">
        {"★".repeat(Math.floor(product.rating))}
        {"☆".repeat(5 - Math.floor(product.rating))}
        <span className="text-gray-600 text-sm">
          ({product.reviews} نظر)
        </span>
      </div>

      <p>{product.description}</p>

      <div>
        <h3 className="text-sm font-medium mb-2">سایز</h3>
        <div className="flex gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className="border rounded-lg px-3 py-1 hover:bg-gray-100 transition"
              onClick={() => console.log(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">رنگ</h3>
        <div className="flex gap-3">
          {product.colors.map((color) => (
            <div
              key={color}
              className="w-6 h-6 rounded-full cursor-pointer border border-gray-300"
              style={{ backgroundColor: color }}
              onClick={() => console.log(color)}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        {quantity > 0 ? (
          <>
            <button
              onClick={handleRemove}
              className="bg-red-600/75 text-white cursor-pointer p-2 rounded-full hover:bg-red-700 transition"
            >
              {quantity === 1 ? <Trash size={18} color='#fff' /> : <Minus size={18} color="#000" />}
            </button>

            <span className="px-2">{quantity}</span>

            <button
              onClick={handleAdd}
              className="bg-green-600/75 text-white cursor-pointer p-2 rounded-full hover:bg-green-700 transition"
            >
              <Add size={18} color='#000' />
            </button>
          </>
        ) : (
          <button
            onClick={handleAdd}
            className="bg-yellow-700 text-white cursor-pointer px-5 py-2 rounded-lg hover:bg-yellow-800 transition"
          >
            افزودن به سبد خرید
          </button>
        )}

        <button
          onClick={handleShare}
          className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 transition cursor-pointer"
        >
          اشتراک‌گذاری
        </button>
      </div>
    </div>
  );
}
