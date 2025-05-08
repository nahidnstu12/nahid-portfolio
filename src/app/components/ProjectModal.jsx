"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProjectModal({ project, isOpen, closeModal }) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-row items-start justify-between">
            <DialogTitle className="text-2xl font-bold leading-6 text-gradient">
              {project.title}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>

        <div className="relative h-60 mb-6 rounded-lg overflow-hidden">
          <Image
            src={project.image || "/project-placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2">Description</h4>
            <div className="space-y-2 text-muted-foreground">
              {project.description.map((desc, idx) => (
                <p key={idx}>{desc}</p>
              ))}
            </div>
          </div>

          {project.my_contributions && project.my_contributions.length > 0 && (
            <div>
              <h4 className="text-lg font-medium mb-2">My Contributions</h4>
              <div className="space-y-2 text-muted-foreground">
                {project.my_contributions.map((contribution, idx) => (
                  <p key={idx}>{contribution}</p>
                ))}
              </div>
            </div>
          )}

          <div>
            <h4 className="text-lg font-medium mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techstack.map((tech, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </Button>
            {project.sourceUrl && (
              <Button variant="outline" asChild>
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
} 