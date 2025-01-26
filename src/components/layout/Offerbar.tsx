export default function Offerbar() {
  return (
    <div className="w-full bg-black md:block hidden text-[#CCCCCC]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-14 items-center py-2 text-sm gap-y-2">
          {/* Free Delivery */}
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-truck size-4"></i>
            <span>Free Delivery</span>
          </div>

          {/* Authorized Dealer */}
          <div className="hidden md:block">
            <span>1Carsoft UK Authorised Dealer</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
            </div>
            <span>Rated Excellent</span>
          </div>

          {/* Buy Now Pay Later */}
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-clock"></i>
            <span>Buy Now, Pay Later</span>
          </div>

          {/* Found it Cheaper */}
          <div className="flex items-center justify-center gap-1">
            <i className="fa-solid fa-check size-4"></i>
            <span>Found it Cheaper?</span>
          </div>
        </div>
      </div>
    </div>
  );
}
