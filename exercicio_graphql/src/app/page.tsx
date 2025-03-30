'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    image: string;
    createdAt: string;
}

export default function Page() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        description: '',
        image: '',
    });
    const [editingId, setEditingId] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch all products
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    };

    // Create new product
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                fetchProducts();
                setFormData({ name: '', price: '', description: '', image: '' });
            }
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    // Update product
    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingId) return;

        try {
            const response = await fetch(`https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products/${editingId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                fetchProducts();
                setFormData({ name: '', price: '', description: '', image: '' });
                setEditingId(null);
            }
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    // Delete product
    const handleDelete = async (id: string) => {
        try {
            const response = await fetch(`https://67b8d8c9699a8a7baef57ad0.mockapi.io/api/products/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchProducts();
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    // Modify handleEdit to ensure modal opens
    const handleEdit = (product: Product) => {
        setFormData({
            name: product.name,
            price: product.price,
            description: product.description,
            image: product.image,
        });
        setEditingId(product.id);
        setIsModalOpen(true);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <motion.p
                        className="mt-4 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Loading Products...
                    </motion.p>
                </motion.div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto p-4"
        >
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex justify-between items-center mb-6"
            >
                <h1 className="text-3xl font-bold">Product Management</h1>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                    onClick={() => {
                        setFormData({ name: '', price: '', description: '', image: '' });
                        setEditingId(null);
                        setIsModalOpen(true);
                    }}
                >
                    Add New Product
                </motion.button>
            </motion.div>

            {/* Modal Form */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <dialog id="product_modal" className="modal modal-open">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="modal-box"
                            >
                                <h2 className="card-title mb-4">
                                    {editingId ? 'Update Product' : 'Create New Product'}
                                </h2>
                                <form onSubmit={editingId ? handleUpdate : handleCreate} className="space-y-4">
                                    <div className="form-control">
                                        <input
                                            type="text"
                                            placeholder="Product Name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <input
                                            type="text"
                                            placeholder="Price"
                                            value={formData.price}
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <textarea
                                            placeholder="Description"
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            className="textarea textarea-bordered w-full"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <input
                                            type="text"
                                            placeholder="Image URL"
                                            value={formData.image}
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                            className="input input-bordered w-full"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className={`btn ${editingId ? 'btn-warning' : 'btn-primary'} w-full`}
                                    >
                                        {editingId ? 'Update Product' : 'Create Product'}
                                    </button>
                                </form>
                            </motion.div>
                            <form method="dialog" className="modal-backdrop">
                                <button onClick={() => setIsModalOpen(false)}>close</button>
                            </form>
                        </dialog>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Products List */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                <AnimatePresence>
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index * 0.1 }
                            }}
                            exit={{ opacity: 0, y: -20 }}
                            whileHover={{ y: -5 }}
                            className="card bg-base-100 shadow-xl"
                        >
                            <figure className="px-4 pt-4">
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-xl h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body">
                                <motion.h2
                                    className="card-title"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {product.name}
                                </motion.h2>
                                <motion.div
                                    className="badge badge-secondary"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    ${product.price}
                                </motion.div>
                                <motion.p
                                    className="text-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    {product.description}
                                </motion.p>
                                <motion.div
                                    className="card-actions justify-end mt-4"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleEdit(product)}
                                        className="btn btn-warning btn-sm"
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleDelete(product.id)}
                                        className="btn btn-error btn-sm"
                                    >
                                        Delete
                                    </motion.button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}