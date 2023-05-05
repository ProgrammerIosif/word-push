function ImageGrid() {
  return (
    <div className="grid grid-cols-[67%_67%] gap-2 max-sm:-mx-5
                    sm:grid-cols-3 sm:gap-4 lg:gap-8">
        <img className="max-sm:h-44 object-cover" width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-1-2x.webp" alt="" />
        <img className="sm:-mt-10 max-sm:h-44 object-cover" width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-4-2x.webp" alt="" />
        <img className="max-sm:h-44 max-sm:-mx-[20vw]  max-sm:object-cover"  width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-8-2x.webp" alt="" />
        <img className="max-sm:h-44 max-sm:-mx-[20vw] max-sm:object-cover"  width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-2-2x.webp" alt="" />
        <img className="max-sm:h-44 sm:-mt-10 max-sm:-mx-[30vw] max-sm:object-cover" width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-5-2x.webp" alt="" />
        <img className="max-sm:h-44 max-sm:-mx-[30vw] max-sm:object-cover"  width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-9-2x.webp" alt="" />
        <img className="max-sm:hidden" width='460' height='410' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-3-2x.webp" alt="" />
        <div className="grid overflow-clip max-sm:col-span-2 max-sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-8 sm:-mt-10">
          <img className="object-cover h-44" width='460' height='280' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-6-2x.webp" alt="" />
          <img className="object-fill max-sm:h-44" width='460' height='210' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-7-2x.webp" alt="" />
        </div>
        <img className="max-sm:hidden" width='460' height='430' src="https://s1.wp.com/wp-content/themes/h4/landing/marketing/pages/hp-2022-oct/media/desktop/theme-10-2x.webp" alt="" />
    </div>

  )
}

export default ImageGrid;
