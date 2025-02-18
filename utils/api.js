import axiosInstance from "@/components/AxiosInstance";

// Fetch all products
export async function fetchProducts() {
  try {
    const response = await axiosInstance.get('/products');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Fetch a single product
export async function fetchProductById(id) {
    try {
      const response = await axiosInstance.get(`/products/${id}`);
    //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }

// Fetch all categories
export async function fetchCategories() {
  try {
    const response = await axiosInstance.get('/categories');
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

// Delete a product by id
export async function deleteProductById(id) {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// Update a category by id
export async function updateCategoryById(id, data) {
  try {
    const response = await axiosInstance.put(`/categories/${id}`, data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
  }
}

// Delete a category by id
export async function deleteCategoryById(id) {
  try {
    const response = await axiosInstance.delete(`/categories/${id}`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error deleting category:', error);
  }
}

// Insert a category
export async function insertCategory(data) {
  try {
    const response = await axiosInstance.post('/categories', data);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error inserting category:', error);
  }
}