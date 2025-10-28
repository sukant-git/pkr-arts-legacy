import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

// Sample gallery items - replace with your actual images
const galleryItems = [
  {
    id: 1,
    title: 'Computer Lab',
    category: 'Facilities',
    imageUrl: 'https://placehold.co/600x400/007bff/ffffff/webp?text=Computer+Lab',
    description: 'State-of-the-art computer laboratory with modern facilities.'
  },
  {
    id: 2,
    title: 'Library',
    category: 'Facilities',
    imageUrl: 'https://placehold.co/600x400/28a745/ffffff/webp?text=Library',
    description: 'Well-stocked library with extensive collection of books and journals.'
  },
  {
    id: 3,
    title: 'Cultural Event',
    category: 'Events',
    imageUrl: 'https://placehold.co/600x400/dc3545/ffffff/webp?text=Cultural+Event',
    description: 'Students performing at the annual cultural festival.'
  },
  {
    id: 4,
    title: 'Science Lab',
    category: 'Facilities',
    imageUrl: 'https://placehold.co/600x400/ffc107/000000/webp?text=Science+Lab',
    description: 'Fully equipped science laboratory for practical experiments.'
  },
  {
    id: 5,
    title: 'Sports Ground',
    category: 'Sports',
    imageUrl: 'https://placehold.co/600x400/17a2b8/ffffff/webp?text=Sports+Ground',
    description: 'Spacious sports ground for various outdoor activities.'
  },
  {
    id: 6,
    title: 'Graduation Day',
    category: 'Events',
    imageUrl: 'https://placehold.co/600x400/6f42c1/ffffff/webp?text=Graduation+Day',
    description: 'Students celebrating their graduation ceremony.'
  },
  {
    id: 7,
    title: 'Auditorium',
    category: 'Facilities',
    imageUrl: 'https://placehold.co/600x400/fd7e14/ffffff/webp?text=Auditorium',
    description: 'Modern auditorium for college events and functions.'
  },
  {
    id: 8,
    title: 'Campus View',
    category: 'Campus',
    imageUrl: 'https://placehold.co/600x400/20c997/ffffff/webp?text=Campus+View',
    description: 'Beautiful view of the college campus.'
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(galleryItems.map(item => item.category))];

  const filteredImages = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 mt-[72px] md:mt-[138px]">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-muted-foreground">Explore our college through pictures</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedImage(item)}
          >
            <CardContent className="p-0">
              <div className="aspect-[4/3] relative group">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <ScrollArea className="max-h-[80vh]">
            {selectedImage && (
              <div className="p-4">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4">
                  <h2 className="text-2xl font-semibold mb-2">{selectedImage.title}</h2>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
