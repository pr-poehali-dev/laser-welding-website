import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="https://cdn.poehali.dev/files/5d86ddde-417e-494f-9b03-1f41c987ef8d.jpg"
                alt="PRISMA Logo"
                className="h-10 w-auto mr-3"
              />
              <span className="font-montserrat font-bold text-xl">PRISMA</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Профессиональная лазерная обработка металла. Качество, точность,
              надежность.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <Icon name="MapPin" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Лазерная резка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Лазерная сварка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Порошковая покраска
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li>+7 (495) 123-45-67</li>
              <li>info@prisma.ru</li>
              <li>г. Кстово</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Prisma. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
