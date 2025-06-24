
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Edit, Trash2, Eye } from "lucide-react";

const BlogManagement = () => {
  const [showCreateBlog, setShowCreateBlog] = useState(false);

  const blogs = [
    { 
      id: 1, 
      title: "Understanding IVF Process", 
      author: "Dr. Sarah Johnson", 
      postDate: "2024-02-15", 
      isActive: true 
    },
    { 
      id: 2, 
      title: "Fertility Diet Tips", 
      author: "Dr. Michael Chen", 
      postDate: "2024-02-10", 
      isActive: true 
    },
    { 
      id: 3, 
      title: "Managing Stress During Treatment", 
      author: "Dr. Sarah Johnson", 
      postDate: "2024-02-05", 
      isActive: false 
    }
  ];

  const handleCreateBlog = () => {
    console.log("Creating blog");
    setShowCreateBlog(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Blog Management</h2>
          <p className="text-gray-600">Manage blog posts and articles</p>
        </div>
        <Dialog open={showCreateBlog} onOpenChange={setShowCreateBlog}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-teal-600">
              <Plus className="w-4 h-4 mr-2" />
              Create Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Blog Post</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <Input placeholder="Enter blog title..." />
              </div>
              <div>
                <Label>Content</Label>
                <Textarea rows={6} placeholder="Write your blog content..." />
              </div>
              <div>
                <Label>Featured Image URL</Label>
                <Input placeholder="Enter image URL..." />
              </div>
              <Button onClick={handleCreateBlog} className="w-full">
                Create Blog Post
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-blue-600" />
            <span>Blog Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Post Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {blogs.map((blog) => (
                <TableRow key={blog.id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.author}</TableCell>
                  <TableCell>{blog.postDate}</TableCell>
                  <TableCell>
                    <Badge variant={blog.isActive ? "default" : "secondary"}>
                      {blog.isActive ? "Active" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogManagement;
