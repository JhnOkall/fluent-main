import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText,
  Users,
  Video,
  Calendar,
  Mails,
  LayoutGrid,
  FileSignature,
  Share2,
  BookUser,
} from "lucide-react";

const features = {
  collaboration: [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "File Sync & Share",
      description:
        "Store, share, and synchronize your files across all devices with Nextcloud integration.",
    },
    {
      icon: <FileSignature className="h-8 w-8 text-primary" />,
      title: "Collaborative Editing",
      description:
        "Real-time co-authoring of documents, spreadsheets, and presentations with OnlyOffice.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Chat",
      description:
        "Integrated chat for instant communication within your teams via Nextcloud Talk.",
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Video Meetings",
      description:
        "Host secure video calls and meetings directly within the Fluent platform.",
    },
  ],
  organization: [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Calendar Management",
      description:
        "A comprehensive calendar to organize your schedules, appointments, and team events.",
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary" />,
      title: "Task Boards",
      description:
        "Manage projects and tasks with Kanban-style boards using Nextcloud Deck.",
    },
    {
      icon: <BookUser className="h-8 w-8 text-primary" />,
      title: "Contact Management",
      description:
        "A centralized address book to manage all your personal and professional contacts.",
    },
    {
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: "SSO & RBAC",
      description:
        "Secure access with Single Sign-On and Role-Based Access Control via Keycloak.",
    },
  ],
  communication: [
    {
      icon: <Mails className="h-8 w-8 text-primary" />,
      title: "Integrated Email",
      description:
        "Seamlessly manage your emails through the integrated Nextcloud Mail client.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description:
        "Create shared spaces for teams to collaborate on projects and documents.",
    },
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Large Meetings",
      description:
        "Host video meetings for up to 100 participants on our Business Plan.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Markdown Notes",
      description:
        "Take and share real-time notes using Markdown for clear, collaborative documentation.",
    },
  ],
};

export function FeatureShowcase() {
  return (
    <section id="features" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            A Fully Integrated Productivity Suite
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One platform to replace them all. Stop juggling multiple
            subscriptions and streamline your workflow with Fluent's
            comprehensive set of tools.
          </p>
        </div>

        <Tabs defaultValue="collaboration" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-10">
            <TabsTrigger value="collaboration">Collaborate</TabsTrigger>
            <TabsTrigger value="organization">Organize</TabsTrigger>
            <TabsTrigger value="communication">Communicate</TabsTrigger>
          </TabsList>
          <TabsContent value="collaboration">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.collaboration.map((feature, i) => (
                <Card
                  key={i}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="organization">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.organization.map((feature, i) => (
                <Card
                  key={i}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="communication">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.communication.map((feature, i) => (
                <Card
                  key={i}
                  className="text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
