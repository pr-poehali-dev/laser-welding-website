import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Zap" className="h-8 w-8 text-orange-500 mr-2" />
            <span className="font-montserrat font-bold text-xl text-gray-900">
              LaserTech
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 font-medium transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 font-medium transition-colors"
              >
                Услуги
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 font-medium transition-colors"
              >
                О компании
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-orange-500 px-3 py-2 font-medium transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Заказать услугу
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
