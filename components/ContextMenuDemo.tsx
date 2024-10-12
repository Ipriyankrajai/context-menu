"use client"

import React, { useState } from 'react'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { toast } from "@/components/ui/use-toast"

const ContextMenuDemo: React.FC = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleDelete = (item: string) => {
    setItems(items.filter(i => i !== item))
    toast({
      title: "Item Deleted",
      description: `${item} has been deleted.`,
    })
  }

  const handleArchive = (item: string) => {
    toast({
      title: "Item Archived",
      description: `${item} has been archived.`,
    })
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Context Menu Demo</h1>
      <ul>
        {items.map((item) => (
          <ContextMenu key={item}>
            <ContextMenuTrigger>
              <li className="p-2 border rounded mb-2 cursor-context-menu">
                {item}
              </li>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={() => handleDelete(item)}>
                Delete
              </ContextMenuItem>
              <ContextMenuItem onClick={() => handleArchive(item)}>
                Archive
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        ))}
      </ul>
    </div>
  )
}

export default ContextMenuDemo