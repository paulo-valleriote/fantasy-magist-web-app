'use client'
import type { Metadata } from 'next'

import SheetDefaultLayout from './components/SheetDefaultLayout'
import React from 'react'
import { motion } from 'framer-motion'
import { CharacterContextProvider } from '@/contexts/CharacterContext'
import PrivateRoute from '@/app/components/PrivateRoute'

export default function SheetsLayout({
	children,
}: {
	children: React.ReactElement | React.ReactElement[]
}) {
	return (
		<CharacterContextProvider>
			<PrivateRoute>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<SheetDefaultLayout>{children}</SheetDefaultLayout>
				</motion.div>
			</PrivateRoute>
		</CharacterContextProvider>
	)
}
