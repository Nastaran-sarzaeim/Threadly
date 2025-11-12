import { Filter } from "iconsax-react";

export default function FilterBar() {
    return (
        <div className="flex flex-col md:flex-row  justify-between bg-orange-50 p-4 rounded-xl mb-6 text-sm mx-4 md:mx-10 gap-4 md:gap-0">

            <div className="flex flex-row  sm:items-center gap-2">
                <Filter size={24} color="black" />
                <button className="p-1">فیلتر</button>
            </div>

            <div className="flex flex-col sm:flex-row  sm:items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1">
                    <span>نمایش:</span>
                    <select className="border-b px-2 py-1">
                        <option>16</option>
                        <option>32</option>
                    </select>
                </div>
                <div className="flex items-center gap-1">
                    <span>مرتب‌سازی بر اساس:</span>
                    <select className="border-b px-2 py-1">
                        <option>پیش‌فرض</option>
                        <option>بیشترین تخفیف</option>
                        <option>جدیدترین</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
