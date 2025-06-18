import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-gray-900 shadow-lg fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/5d86ddde-417e-494f-9b03-1f41c987ef8d.jpg"
              alt="PRISMA Logo"
              className="h-10 w-auto mr-3"
            />
            <span className="font-montserrat font-bold text-xl text-white">
              PRISMA
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 font-medium transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 font-medium transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 font-medium transition-colors"
              >
                О компании
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-gray-100 px-3 py-2 font-medium transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Заказать услугу
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
