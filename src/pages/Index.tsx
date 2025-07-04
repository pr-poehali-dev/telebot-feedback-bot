import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    orderNumber: "",
    email: "",
    message: "",
  });

  const categories = [
    {
      id: "order",
      name: "Вопросы по заказу",
      icon: "Package",
      color: "bg-blue-500",
    },
    {
      id: "return",
      name: "Возврат товара",
      icon: "RotateCcw",
      color: "bg-red-500",
    },
    {
      id: "payment",
      name: "Оплата",
      icon: "CreditCard",
      color: "bg-green-500",
    },
    { id: "delivery", name: "Доставка", icon: "Truck", color: "bg-orange-500" },
    {
      id: "tech",
      name: "Техподдержка",
      icon: "Headphones",
      color: "bg-purple-500",
    },
    {
      id: "other",
      name: "Другое",
      icon: "MessageCircle",
      color: "bg-gray-500",
    },
  ];

  const faqItems = [
    {
      q: "Как отследить заказ?",
      a: 'Используйте номер заказа в разделе "Отслеживание"',
    },
    { q: "Сколько времени занимает доставка?", a: "Обычно 3-5 рабочих дней" },
    { q: "Как вернуть товар?", a: "Обратитесь в поддержку с номером заказа" },
  ];

  const recentTickets = [
    {
      id: "#12345",
      category: "Возврат",
      status: "В обработке",
      date: "2024-01-15",
    },
    { id: "#12344", category: "Доставка", status: "Решен", date: "2024-01-14" },
    { id: "#12343", category: "Оплата", status: "Решен", date: "2024-01-13" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", { ...formData, category: selectedCategory });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Icon name="Bot" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ShopBot 🤖</h1>
                <p className="text-gray-600">Бот поддержки интернет-магазина</p>
              </div>
            </div>
            <Badge
              variant="outline"
              className="bg-green-50 text-green-700 border-green-200"
            >
              <Icon name="Circle" className="w-2 h-2 mr-1 fill-current" />
              Онлайн
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="menu">Главное меню</TabsTrigger>
            <TabsTrigger value="feedback">Обратная связь</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>

          {/* Main Menu */}
          <TabsContent value="menu" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="MessageCircle" className="w-5 h-5" />
                  <span>Привет! 👋 Как дела?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Я помогу тебе с вопросами по заказам, возвратам и доставке.
                  Выбери категорию ниже:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {categories.map((category) => (
                    <Card
                      key={category.id}
                      className="cursor-pointer hover:shadow-md transition-all hover:scale-105 animate-fade-in"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center pulse`}
                          >
                            <Icon
                              name={category.icon as any}
                              className="w-5 h-5 text-white"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-900">
                              {category.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              Нажми для выбора
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* FAQ Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Icon name="HelpCircle" className="w-5 h-5" />
                      <span>Частые вопросы</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-blue-500 pl-4"
                        >
                          <h4 className="font-medium text-gray-900">
                            {item.q}
                          </h4>
                          <p className="text-gray-600 mt-1">{item.a}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Form */}
          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Send" className="w-5 h-5" />
                  <span>Форма обратной связи</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Имя
                      </label>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Номер заказа
                      </label>
                      <Input
                        placeholder="Например: #12345"
                        value={formData.orderNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            orderNumber: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Категория вопроса
                    </label>
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите ваш вопрос или проблему..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    <Icon name="Send" className="w-4 h-4 mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History */}
          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="History" className="w-5 h-5" />
                  <span>История обращений</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTickets.map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon
                            name="Ticket"
                            className="w-5 h-5 text-blue-600"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {ticket.id}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {ticket.category}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant={
                            ticket.status === "Решен" ? "default" : "secondary"
                          }
                          className={
                            ticket.status === "Решен"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {ticket.status}
                        </Badge>
                        <p className="text-sm text-gray-500 mt-1">
                          {ticket.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
